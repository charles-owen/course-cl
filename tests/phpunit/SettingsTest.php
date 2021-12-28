<?php
/** @file
 * Unit tests for the class Settings
 * @cond
 */

require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/CourseDatabaseTestBase.php';

use CL\Course\Settings;


class SettingsTest extends CourseDatabaseTestBase {

    protected function setUp() : void {
        $this->ensureTable(new Settings($this->site->db));
    }

    public function test_read_write() {
        $time1 = time();
        $time2 = $time1 + 86400;

        $system = "test";
        $semester = "SS21";
        $section = "730";
        $category = 'assignment-due-dates';
        $tag = 'step1';

        $settings = new Settings($this->site->db);
        $setting = $settings->read($system, $semester, $section, $category, $tag);

        $this->assertEquals($system, $setting->system);
        $this->assertEquals($semester, $setting->semester);
        $this->assertEquals($section, $setting->sectionId);
        $this->assertEquals($category, $setting->category);
        $this->assertEquals($tag, $setting->tag);

        $step1 = $setting->get('step1');
        $this->assertNull($step1);

        $step3 = $setting->get('step3');
        $this->assertNull($step3);

        $step1 = ['release'=>$time1, 'due'=>$time2];
        $setting->set('step1', $step1);

        $settings->write($setting);

        $setting = $settings->read($system, $semester, $section, $category, $tag);

        $this->assertEquals($system, $setting->system);
        $this->assertEquals($semester, $setting->semester);
        $this->assertEquals($section, $setting->sectionId);
        $this->assertEquals($category, $setting->category);
        $this->assertEquals($tag, $setting->tag);

        $step1a = $setting->get('step1', []);
        $this->assertNotEquals([], $step1a);

        $this->assertEquals($time1, $step1a['release']);
        $this->assertEquals($time2, $step1a['due']);
    }
}

/// @endcond
