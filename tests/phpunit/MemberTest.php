<?php
/** @file
 * Unit tests for the class Member
 * @cond 
 */
require_once __DIR__ . '/init.php';

use CL\Course\Member;
use CL\Users\User;
use CL\Site\MetaData;


class MemberTest extends \PHPUnit\Framework\TestCase
{
	public function test() {
		$member = new Member();
		$this->assertEquals(0, $member->id);

		$meta = $member->metaData;
		$this->assertInstanceOf(MetaData::class, $meta);
	}

}

/// @endcond
