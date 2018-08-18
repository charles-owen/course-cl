<?php
/** \cond 
 * Unit tests for the class HandbookCategory
 */

require_once __DIR__ . '/init.php';
use CL\Course\Handbook\HandbookCategory;

class HandbookCategoryTest extends \PHPUnit_Framework_TestCase
{
	/** Test the constructor and the getters: 
	 * get_tag(), get_name(), get_deduct() */
	public function testConstructor() {
		$hc = new HandbookCategory('tag', 'name', 4);
		$this->assertEquals('tag', $hc->tag);
		$this->assertEquals('name', $hc->name);
		$this->assertEquals(4, $hc->deduct);
		
		return $hc;
	}
	
	/**
	 * @depends testConstructor
	 */
	public function testRubric(HandbookCategory $hc) {
		$hc->rubric = 'some rubric';
		$this->assertEquals('some rubric', $hc->rubric);
		
		$hc->rubric = null;
		$this->assertEquals(null, $hc->rubric);
	}
}

/// \endcond
