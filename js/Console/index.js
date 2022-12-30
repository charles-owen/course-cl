
import {CourseConsole} from './CourseConsole';

import PrevNextMemberVue from './Members/PrevNextMember.vue';
import MemberFetcherComponentVue from './Members/MemberFetcherComponent.vue';
import SubmissionsAssignmentMemberComponentVue from './SubmissionsAssignmentMemberComponent.vue';
import MembersFetcherComponentVue from './Members/MembersFetcherComponent.vue';
import SubmissionsLinksVue from './SubmissionsLinks.vue';

Site.PrevNextMemberVue = PrevNextMemberVue;
Site.MemberFetcherComponentVue = MemberFetcherComponentVue;
Site.SubmissionsAssignmentMemberComponentVue = SubmissionsAssignmentMemberComponentVue;
Site.MembersFetcherComponentVue = MembersFetcherComponentVue;
Site.SubmissionsLinksVue = SubmissionsLinksVue;

if(!Site.CourseConsole) {
    Site.CourseConsole = new CourseConsole(Site);
    Site.Console.CourseConsole = Site.CourseConsole
    Site.Console.course = Site.CourseConsole
}

