/**
 * Install the course console components
 * @file
 */

import {CourseConsole} from './CourseConsole';

import PrevNextMemberVue from './Members/PrevNextMember.vue';
import MemberFetcherComponent from './Members/MemberFetcherComponent.vue';
import SubmissionsAssignmentMemberComponentVue from './SubmissionsAssignmentMemberComponent.vue';
import MembersFetcherComponent from './Members/MembersFetcherComponent.vue';
import SubmissionsLinksVue from './SubmissionsLinks.vue';

Site.PrevNextMemberVue = PrevNextMemberVue;
Site.MemberFetcherComponentVue = MemberFetcherComponent;
Site.SubmissionsAssignmentMemberComponentVue = SubmissionsAssignmentMemberComponentVue;
Site.MembersFetcherComponentVue = MembersFetcherComponent;
Site.SubmissionsLinksVue = SubmissionsLinksVue;

if(!Site.CourseConsole) {
    Site.CourseConsole = new CourseConsole(Site);
    Site.Console.CourseConsole = Site.CourseConsole
    Site.Console.course = Site.CourseConsole
}

export {MemberFetcherComponent}
export {MembersFetcherComponent}
