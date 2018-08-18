<?php
/** @file
 * Unit tests for the class ApiMembersBulk
 * @cond 
 */

require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/CourseDatabaseTestBase.php';

use CL\Site\Test\ServerMock;
use CL\Course\Members;
use CL\Users\Users;
use CL\Course\Api\ApiMembersBulk;

class ApiMembersBulkTest extends CourseDatabaseTestBase {
	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['user-many.xml', 'member.xml']);
	}

	public function ensureTables() {
		$this->ensureTable(new Members($this->site->db));
		$this->ensureTable(new Users($this->site->db));
	}

	public function test_upload() {
		// First record is an existing member (bob) and existing user (sue)
		$data = <<<CSV
Term,Subj_Code,Crse_Code,Sctn_Code,Sctn_Id_Code,Course_Title,Instructor_Name,PID,Student_Name,MSUNet_ID,Honor,Student_Level,Class_Code,Primary_Major,Credit,Grade
FS18,CSE,999,799,97H56D,Software Design,OWEN,A12345678,"Parker, Bob (new)",bob, ,UN,3,CMPTR SCI,4,4
FS18,CSE,999,799,97H56D,Software Design,OWEN,A12345679,"Turner, Sue (new)",sue,H,UN,3,CMPTR SCI,4,0
FS18,CSE,999,799,97H56D,Software Design,OWEN,A12745678,"Phibes, Victoria",phibes87, ,UN,4,CMPTR EGR,4,4
FS18,CSE,999,799,97H56D,Software Design,OWEN,A12343678,"Ghandi, Mahatma",ghandi99, ,UN,4,CHEM EGR,4,4
FS18,CSE,999,799,97H56D,Software Design,OWEN,A12345622,"Carter, Jimmy",carter1, ,UN,2,CMPTR SCI,4,4
CSV;

		$users = new Users($this->site->db);
		$admin = $users->get(2);
		$this->site->users->user = $admin;

		$server = new ServerMock();
		$api = new ApiMembersBulk();

		$server->setPost('file', $data);
		$server->setPost('semester', 'FS18');
		$server->setPost('section', '799');

		$time = time() + 1001;
		$json = $api->dispatch($this->site, $server, [], [], $time);

		$users = $json->getData('users')[0]['attributes'];
		$drops = $json->getData('drops')[0]['attributes'];
		$this->assertCount(1, $drops);

		$members = new Members($this->site->db);
		$current = $members->query(['semester'=>'FS18', 'section'=>'799']);
		$this->assertCount(7, $current);
	}

}

/// @endcond
