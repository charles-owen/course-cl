<?php
require '../../site/use/site.php';
$view = new CL\Site\Doc\DocView($site);
$view->title = 'cl/survey installation';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link href="../../../../cl/site.css" type="text/css" rel="stylesheet" />
<?php echo $view->head(); ?>
</head>

<body>
<?php echo $view->header(); ?>
<?php echo Backto::to("cl/course", "./"); ?>

<p>You will need to have installed cl/site and have at least one simple
    page to load. First use composer to install the cl/course component:</p>

<pre class="code">composer require cl/course
composer run cl-installer</pre>

<p>The <code>composer run cl-installer</code> command runs a script that installs the component in the
    system. It must be run any time a new component is added.</p>
<p>The cl/course component will automatically install cl/users and cl/console if they are not already installed.</p>

<p>To get the initial tables created, browse to the URL (relative to the
    site root):</p>

<p class="center"><code>cl/setup/tables</code></p>
<p>For example, if the site URL is https://www.example.com/site, the URL to create the tables will be https://www.example.com/site/cl/setup/tables.</p>



<?php echo Backto::to("cl/course", "./"); ?>
<?php echo $view->footer(); ?>
</body>
</html>
