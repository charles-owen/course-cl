/**
 * @file
 */
import {SectionStatus} from './js/SectionStatus';
import {Member} from './js/Members/Member';

Site.SectionStatus = SectionStatus;
Site.Member = Member;

import {CourseFactory} from './js/CourseFactory';

// Use the factory to create the Users object
let Course = CourseFactory.create(Site.site);
export {Course};
