<?php
/** @file
 * Course Handbook deductions definition file
 *
 * A function define_handbook must be provided with code 
 * to define the handbook categories.
 */
 
return function (\CL\Course\Handbook $handbook) {

	$handbook->title = 'Handbook 2';

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

	$category = $handbook->add_category("style", "Programming style", 4);
	$category->rubric = <<<RUBRIC
	<p>This is a deduction for deviating from the course standard style of open braces on new lines that line up and other issues of the the standard programming style.</p>
RUBRIC;

	$category = $handbook->add_category("indent", "Indentation", 4);
	$category = $handbook->add_category("camel", "Camel case", 4);
	$category = $handbook->add_category("variables", "Meaningful variable names", 4);
	$category = $handbook->add_category("comments1", "Comments sufficient", 4);
	$category = $handbook->add_category("comments2", "Comments readable", 4);
	$category = $handbook->add_category("warnings", "Compiler warnings", 4);
	$category = $handbook->add_category("members", "Member variables not initialized", 4);
	$category->rubric = <<<RUBRIC
<p>All member variables must be initialized either directly or in the constructor. Note that some member variables, such as string, vector, and smart pointers initialize themselves. But, basic types should be initialized to something meaningful.</p>
RUBRIC;

	$category = $handbook->add_category("rtti", "Runtime type identification", 4);
	$category = $handbook->add_category("literal", "Literal constants", 4);
	$category = $handbook->add_category("files", "Proper file structure", 4);
	$category->rubric = "<p>Should not be more than one top level class in a .h or .cpp file.</p>";
	$category = $handbook->add_category("inline", "Excessive inline functions", 4);
	$category->rubric = "<p>Inline should not be more than 3 lines of code. This rule does not apply to template classes.</p>";
	
	$category = $handbook->add_category("downcasts", "Downcasts", 4);
	$category = $handbook->add_category("public", "Public data members", 4);
};
