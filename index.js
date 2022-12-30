/**
 * @file
 */
import {SectionStatus} from './js/SectionStatus';
import {Member} from './js/Members/Member';

Site.SectionStatus = SectionStatus;
Site.Member = Member;

import {CourseFactory} from './js/CourseFactory';

if(!Site.Course) {
    // Use the factory to create the Course object
    let Course = CourseFactory.create(Site);

    Site.Course = Course
}


