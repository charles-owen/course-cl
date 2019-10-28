<?php
require '../../site/use/site.php';
$view = new CL\Site\Doc\DocView($site);
$view->title = 'cl/course The Assignments File';
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

<p>A course section is defined by assignments file. This is a file in the <a class="cl-autoback" href="../../site/use/config-dir.php">site configuration directory</a> with a name in the format assignments.semester.section.php. For example, the assignments file for FS19 section 730 would be: assignments.fs19.730.php. The semeter ID is in lower case.</p>

<div class="full">
<?php echo Toggle::begin("Expand for an example assignments file", "p"); ?>


<pre class="code">&lt;?php
/** @file
 * Course Assigment declarations
 */
 
return function(\CL\Course\Assignments $assignments) {

    $assignments-&gt;gradeDispute = '&lt;a href="mailto:email@msu.edu "&gt;Name of whoever handles&lt;/a&gt;';

    //
    // Calendar events
    //
    $assignments-&gt;add_calendar("Assignments Open", "8/28/2019");
    $assignments-&gt;add_calendar("Meet and Greet", "9/4/2019", "startup");
    $assignments-&gt;add_calendar("Exam 1", "10/14/2019", "exam1");
    $assignments-&gt;add_calendar("Exam 2", "12/10/2019", "exam2");
    $assignments-&gt;add_calendar("University Holiday", "9/2/2019");
    $assignments-&gt;add_calendar("University Holiday", "11/28/2019");
    $assignments-&gt;add_calendar("University Holiday", "11/29/2019");
    
    // Example of changing the calendar item color
    $assignments-&gt;add_calendar("Project 1 Sprint 1", "10/1/2019", 'project1', null, '#c06000');

    $assignments-&gt;add_calendar("Project 1 How I Did It", "10/29/2019", "project1/howididit");

    /*
     * Course grading categories and assignments
     */

    $designs = $assignments-&gt;add_category("designs", "Design Assignments", 15);
    $steps = $assignments-&gt;add_category("steps", "Step Assignments", 30);
    $projects = $assignments-&gt;add_category("projects", "Projects", 35);
    $exams = $assignments-&gt;add_category("exams", "Exams", 20);

    //
    // Design 1
    //
    $design = $designs-&gt;add_step("design1", "Design 1");
    // set_release sets the release date and due date in one line
    $design-&gt;set_release('8/28/2019 1:00am', '9/03/2019 11:55pm');


    //
    // Design 2
    //
    $design = $designs-&gt;add_step("design2", "Design 2");
    $design-&gt;set_release('8/28/2019 1:00am', '9/9/2019 11:55pm');
    $design-&gt;set_reviews_due('9/13/2019 11:55pm');
    $design-&gt;solving = 'design2solving-{semester}';

    // ...
    
    //
    // Step 1
    //
    $step = $steps-&gt;add_step("step1", "Step 1");
    $step-&gt;set_release('8/28/2019 1:00am', '9/5/2019 11:55pm');
    $step-&gt;solving = 'step1solving-{semester}';
    $step-&gt;extension('9/6/2019 11:55pm');

    //
    // Step 2
    //
    $step = $steps-&gt;add_step("step2", "Step 2");
    $step-&gt;set_release('8/28/2019 1:00am', '9/12/2019 11:55pm');
    $step-&gt;solving = 'step2solving-{semester}';
    $step-&gt;set_due('9/13/2019 11:55pm', true);

    //
    // Project 1
    //
    $project = $projects-&gt;add_assignment("project1", "Project 1");
    $project-&gt;grading-&gt;points = 40;
    $project-&gt;set_release('9/22/2019', '10/18/2019 11:55pm');
    $project-&gt;extension('10/22/2019 11:55pm');

    //
    // Project 2
    //
    $project = $projects-&gt;add_assignment("project2a", "Project 2 Part 1", 'project2');
    $project-&gt;grading-&gt;points = 15;
    $project-&gt;set_release('none', '11/15/2019 11:55pm');

    $project = $projects-&gt;add_assignment("project2", "Project 2 Part 2", 'project2');
    $project-&gt;grading-&gt;points = 45;
    $project-&gt;set_release('none', "11/22/2019 11:55pm");

    
    $exam1 = $exams-&gt;add_assignment("exam1", "Exam 1");
    $exam1-&gt;grading-&gt;add_manual(100, "manual", "Grade");

    $exam2 = $exams-&gt;add_assignment("exam2", "Exam 2");
    $exam2-&gt;grading-&gt;add_manual(100, "manual", "Grade");
};
</pre>

<?php echo Toggle::end(); ?>
	
</div>	

<?php echo $view->footer(); ?>
</body>
</html>
