<?php
/**
 * @file
 * View class for the course section selector page
 */

namespace CL\Course\System;


use CL\Site\Site;
use CL\Users\User;
use CL\Course\Member;
use CL\Course\Members;

/**
 * View class for the course section selector page
 */
class SectionSelectorView extends \CL\Course\View {
	/**
	 * SectionSelectorView constructor.
	 * @param Site $site Site object
	 */
	public function __construct(Site $site) {
		parent::__construct($site, ['open-section']);

		$this->after = '<p class="centerbox secondb">You are indicated as a member of more than one
section of this course. Please select the section you wish to log in to.</p>';

		//
		// Allow for section selector page customization
		//
		$this->decorApply('sectionselector.decor.php');

		$user = $site->users->user;
		if($user->atLeast(User::ADMIN)) {
			$sections = $site->course->sections;
			$memberships = [];
			foreach($sections as $section) {
				$member = new Member(['id'=>0,
					'userid'=>$user->id,
					'semester'=>$section->semester,
					'section'=>$section->id,
					'role'=>$user->role,
					'created'=>time()]);
				$memberships[] = $member;
			}
		} else {
			$members = new \CL\Course\Members($site->db);
			$memberships = $members->getByUser($user->id);
		}

		// Sort into calendar order
		usort($memberships, function($a, $b) {
			$semesterA = $a->semester;
			$semesterB = $b->semester;
			$yearA = +substr($semesterA, 2, 2);
			$yearB = +substr($semesterB, 2, 2);
			if($yearA !== $yearB) {
				return $yearA - $yearB;
			}

			$semA = substr($semesterA, 0, 2);
			$semB = substr($semesterB, 0, 2);
			if($semA !== $semB) {
				if($semA === 'SS') {
					return -1;
				}

				if($semA === 'US') {
					if($semB === 'SS') {}
					return 1;
				} else {
					return -1;
				}

				return 1;
			}

			return $a->id - $b->id;
		});

		$data = [];
		foreach($memberships as $member) {
			switch(substr($member->semester, 0, 2)) {
				case 'SS':
					$sem = 'Spring';
					break;

				case 'US':
					$sem = 'Summer';
					break;

				default:
					$sem = 'Fall';
					break;
			}

			$data[] = [
				'course'=>$site->course->name,
				'desc'=>$site->course->desc,
				'semester'=>$member->semester,
				'section'=>$member->sectionId,
				'nice'=>$sem . ', ' . '20' . substr($member->semester, 2, 2)
			];
		}

		$this->addJSON('cl-section-selector', json_encode([
			'sections' => $data,
			'before'=>$this->before,
			'after'=>$this->after
		]));
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * before | string | Content (HTML) to display before the section selector
	 * after | string | Content (HTML) to display after the section selector
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 * @return mixed
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'before':
				$this->before .= $value;
				break;

			case 'after':
				$this->after .= $value;
				break;

			default:
				parent::__set($property, $value);
		}
	}

	private $before = '';
	private $after = '';
}
