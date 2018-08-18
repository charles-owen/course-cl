<?php
/** @file
 * Course Handbook deductions definition file
 *
 * A function define_handbook must be provided with code 
 * to define the handbook categories.
 */
 
return function (\CL\Course\Handbook $handbook) {

	$handbook->title = 'Handbook 1';

	// Parameters in order:
	// $tag A short string associated with the category
	// $name The category name
	// $deduct Maximum possible deduction
	$category = $handbook->add_category("funcheaders", "Function Headers", 4);
	$category->rubric = <<<RUBRIC
	<p>1 point if 1-3 are missing, 2 if quite a few, 
	3 if nearly all, 4 if none at all are provided.</p>
	<p>Ignore any "warning: ignoring unsupported tag" warnings you may see. They are due to Doxygen versions.</p>
RUBRIC;
	
	$category = $handbook->add_category("moduleheaders", "Module headers", 4);
	$category->rubric = <<<RUBRIC
	<p>1 point if 1-3 are missing, 2 if quite a few, 
	3 if nearly all, 4 if none at all are provided.</p>
	<p>Ignore any "warning: ignoring unsupported tag" warnings you may see. They are due to Doxygen versions.</p>
RUBRIC;

};
