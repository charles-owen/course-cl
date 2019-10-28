<?php
require '../../site/use/site.php';
$view = new CL\Site\Doc\DocView($site);
$view->title = 'cl/course ...';
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

<p>...</p>

<?php echo $view->footer(); ?>
</body>
</html>
