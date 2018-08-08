<?php
require '../../../../../site.php';
$view = new CL\Course\View($site);
$view->title = "Error Help Demo";
?>
<!DOCTYPE html>
<html lang="en">
<head><?php echo $view->head(); ?></head>
<body>
<?php
echo $view->header();
?>

<p><div class="cl-error-help" style="display: none"></div></p>

<?php
echo $view->footer();
?>

</body>
</html>


