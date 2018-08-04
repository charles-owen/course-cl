/**
 * @file
 * Course console components
 */

import MembersEditorComponent from './Members/MembersEditorComponent.vue';
import MemberEditorComponent from './Members/MemberEditorComponent.vue';
import SectionComponent from './SectionComponent.vue';
import AssignmentsComponent from './AssignmentsComponent.vue';
import ExtensionsComponent from './ExtensionsComponent.vue';
import SubmissionsComponent from './SubmissionsComponent.vue';
import SubmissionComponent from './SubmissionComponent.vue';

let CourseConsole = function() {
    this.assignmentLinks = [];

    this.assignmentLink = function(property, name, route) {
        this.assignmentLinks.push({property: property, name: name, route: route});
    }
}

Console.Console.title = 'Course Console';

Console.tables.add({
    title: 'Course',
    order: 10,
    api: '/api/course/tables'
});

Console.components.addOption({
    atLeast: Users.User.STAFF,
    page: {title: 'Course', route: '/course', order: 3},
    section: {title: 'Course', order: 5},
    title: 'Members',
    order: 1,
    route: '/course/members',
    routes: [
        {route: '/course/members', component: MembersEditorComponent, props: {management: false}}
    ]
});

Console.components.addOption({
    atLeast: Users.User.STAFF,
    page: {title: 'Course', route: '/course', order: 3},
    section: {title: 'Course', order: 5},
    title: 'Assignments',
    order: 2,
    route: '/course/assignments',
    routes: [
        {route: '/course/assignments', component: AssignmentsComponent}
    ]
});


Console.components.addOption({
    atLeast: Users.User.ADMIN,
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
    {route: '/course/submissions/:assigntag/:memberid', name: 'submissions', component: SubmissionComponent, props: true}
]);


Console.components.addMainComponent('section-component', SectionComponent, 1);

Console.course = new CourseConsole();

export default CourseConsole;
