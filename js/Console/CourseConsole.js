import {Member} from '../Members/Member';
import MembersEditorComponent from './Members/MembersEditorComponent.vue';
import MemberEditorComponent from './Members/MemberEditorComponent.vue';
import SectionComponent from './SectionComponent.vue';
import AssignmentsComponent from './AssignmentsComponent.vue';
import ExtensionsComponent from './ExtensionsComponent.vue';
import SubmissionsComponent from './SubmissionsComponent.vue';
import SubmissionsAssignmentMember from './SubmissionsAssignmentMember.vue';
import CourseEmailVue from './CourseEmail.vue';
import SpoofingVue from './Spoofing.vue';

import SubmissionsLinksVue from './SubmissionsLinks.vue';

/**
 * Course console components
 * @param site The Site object
 * @constructor
 */
export let CourseConsole = function(site) {
    const Console = site.console;

    //
    // Assignment links are linked added to the assignment page next to an
    // assignment by a subsystem. This is how "quiz" is added to see the
    // quiz submissions for an assignment.
    //
    this.assignmentLinks = [];

    this.assignmentLink = function(property, name, route) {
        this.assignmentLinks.push({property: property, name: name, route: route});
    }

    Console.title = 'Course Console';

    Console.tables.add({
        title: 'Course',
        order: 20,
        api: '/api/course/tables'
    });

    //const page = {title: 'Course', route: '/course', order: 3};
    const page = {title: 'Main', route: '', order: 1};

    Console.components.addOption({
        atLeast: Member.STAFF,
        page: page,
        section: {title: 'Course', order: 5},
        title: 'Members',
        order: 1,
        route: '/course/members',
        routes: [
            {route: '/course/members', component: MembersEditorComponent, props: {management: false}}
        ]
    });

    Console.components.addOption({
        atLeast: Member.STAFF,
        page: page,
        section: {title: 'Course', order: 5},
        title: 'Assignments',
        order: 2,
        route: '/course/assignments',
        routes: [
            {route: '/course/assignments', component: AssignmentsComponent}
        ]
    });

	Console.components.addOption({
		atLeast: {tag: 'course-spoofing', default: Member.TA},
		page: page,
		section: {title: 'Course', order: 5},
		title: 'Member Spoofing',
		order: 3,
		route: '/course/spoofing',
		routes: [
			{route: '/course/spoofing', component: SpoofingVue}
		]
	});

    Console.components.addOption({
        atLeast: Member.TA,
        page: page,
        section: {title: 'Course', order: 5},
        title: 'Email Members',
        order: 4,
        route: '/course/email',
        routes: [
            {route: '/course/email', component: CourseEmailVue}
        ]
    });


	Console.components.addOption({
        atLeast: Member.ADMIN,
        page: {title: 'Management', route: '/management', order: 10},
        section: {title: 'Course Management', order: 1},
        title: 'Members',
        order: 1,
        route: '/management/course/members',
        routes: [
            {route: '/management/course/members', name: 'members', component: MembersEditorComponent, props: {management: true}},
            {route: '/management/course/member/:id', name: 'member', component: MemberEditorComponent, props: true}
        ]
    });

    Console.components.addRoutes([
        {route: '/course/extensions/:assigntag', component: ExtensionsComponent, props: true},
        {route: '/course/submissions/:assigntag', component: SubmissionsComponent, props: true},
        {route: '/course/submissions/:assigntag/:memberid', name: 'submissions', component: SubmissionsAssignmentMember, props: true}
    ]);


    Console.components.addNav2(SectionComponent, 10);

    //
    // Exports
    //
    this.SubmissionsLinksVue = SubmissionsLinksVue;
}


