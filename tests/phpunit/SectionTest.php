<?php
/** @file
 * Unit tests for the class Section
 * @cond
 */

require_once __DIR__ . '/init.php';

use CL\Course\Course;
use CL\Course\Section;

class SectionTest extends \PHPUnit\Framework\TestCase
{
	public function test_construct() {
		$site = new \CL\Site\Site(__DIR__);
		$course = new Course();
		$course->install($site);
		$section = new Section($course, "FS14", "001", Section::Normal);
		$this->assertEquals(Section::Normal, $section->type);
		$this->assertEquals("001", $section->id);
	}


	public function test_get_textbook() {
		$site = new \CL\Site\Site(__DIR__);
        $site->config = 'course';
		$course = new Course();
		$course->install($site);

		$section = $course->add_section("FS18", "799", Section::Normal);

		// The following will read the file course/textbooks.799.fs18.php to get the textbook information
		$textbook1 = $section->get_textbook(1);
		$this->assertInstanceOf("\\CL\\Course\\Textbook", $textbook1);
		$this->assertEquals('Object-Oriented Modeling and Design with UML', $textbook1->title);

		$textbook2 = $section->get_textbook(2);
		$this->assertInstanceOf("\\CL\\Course\\Textbook", $textbook2);
		$this->assertEquals('Design Patterns: Elements of Reusable Object-oriented Software', $textbook2->title);
	}

}

/// @endcond
