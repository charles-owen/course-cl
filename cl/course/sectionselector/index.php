<?php
require '../../../site.php';
$view = new CL\Course\System\SectionSelectorView($site);
echo $view->vue('sectionselector');

