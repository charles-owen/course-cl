<?php
require '../../site/use/site.php';
$view = new CL\Site\Doc\DocView($site);
$view->title = 'cl/course course.inc.php';
$view->set_autoback();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link href="../../../../cl/course.css" type="text/css" rel="stylesheet" />
<?php echo $view->head(); ?>
</head>

<body>
<?php echo $view->header(); ?>

<p>All course sections for a site are defined in the file course.inc.php in the <a class="cl-autoback" href="../../site/use/config-dir.php">site configuration directory</a>. This is an example course.inc.php:</p>
<pre class="code">&lt;?php
/** @file 
 * This file contains the information that specifies a course
 *
 * This file must return a function that accepts the variable $course
 */

use \CL\Course\Section;

return function(\CL\Course\Course $course) {
	
	$course-&gt;define("cse335", 	// Course account name
		"CSE335", 				// Course name
		"Object-oriented Software Development"
		);
		
	/*
	 * Add the sections 
	 */
	$course-&gt;add_section('FS19', '730', Section::Online);
};
</pre>
<p>The course account name is usually the course in lower case. The Course name is two values, a short Course ID and a full course name as it will appear on the course home page.</p>
<p>The parameters to add_section are the semester ID in upper case, the section ID, and the section type. The options for section type are:</p>
<ul>
  <li>Section::Normal</li>
  <li>Section::Online</li>
  <li>Section::Hybrid</li>
  <li>Section::Flipped</li>
</ul>
<?php echo $view->footer(); ?>
</body>
</html>
