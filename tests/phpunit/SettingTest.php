<?php
/** @file
 * Unit tests for the class Setting
 * @cond
 */

require_once __DIR__ . '/init.php';

use CL\Course\Setting;

class SettingTest extends \PHPUnit\Framework\TestCase
{
	public function test_get() {
        $time1 = time();
        $time2 = $time1 + 86400;
        $time3 = $time2 + 100000;
        $time4 = $time3 + 100123;
        $json = <<<JSON
{
    "step1": {"release": $time1, "due": $time2},
    "step2": {"release": $time3, "due": $time4}
}
JSON;

		$setting = new Setting('course', 'FS18', '801A', 'extensions', '', $json);

        $this->assertEquals('course', $setting->system);
        $this->assertEquals('FS18', $setting->semester);
        $this->assertEquals('801A', $setting->sectionId);
        $this->assertEquals('extensions', $setting->category);
        $this->assertEquals('', $setting->tag);

        $step1 = $setting->get('step1');
        $this->assertEquals($time1, $step1['release']);
        $this->assertEquals($time2, $step1['due']);

        $step2 = $setting->get('step2');
        $this->assertEquals($time3, $step2['release']);
        $this->assertEquals($time4, $step2['due']);

        $step3 = $setting->get('step3');
        $this->assertNull($step3);
	}

    public function test_set() {
        $time1 = time();
        $time2 = $time1 + 86400;
        $json = "{}";

        $setting = new Setting('course', 'FS18', '801A', 'extensions', '', $json);

        $step1 = $setting->get('step1', []);
        $this->assertEquals([], $step1);

        $step1['release'] = $time1;
        $step1['due'] = $time2;

        $setting->set('step1', $step1);

        $step1a = $setting->get('step1', []);
        $this->assertNotEquals([], $step1a);

        $this->assertEquals($time1, $step1a['release']);
        $this->assertEquals($time2, $step1a['due']);
    }
}

/// @endcond
