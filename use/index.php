<?php
require '../../site/use/site.php';
$view = new CL\Site\Doc\DocView($site);
$view->title = 'cl/course';
?>
<!DOCTYPE html>
<html lang="en">
<head>
<link href="../../../../cl/site.css" type="text/css" rel="stylesheet" />
<?php echo $view->head(); ?>
</head>

<body>
<?php echo $view->header(); ?>

<p>The cl/course component installs support for courses, including sections and membership.</p>
<ul>
    <li><a class="cl-autoback" href="install.php">Installation and Configuration</a></li>
</ul>

<?php echo $view->footer(); ?>
</body>
</html>
