
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

let courseConsole = new CourseConsole(Site.site);
Site.site.console.course = courseConsole;

