import {Membership} from '../../../users/js/Users/Membership.js';

/**
 * Member of a course
 * Attaches to a user Object
 * @constructor
 */
let Member = function(json) {
    Membership.call(this);

    let role = 'G';

    if(json !== undefined) {
        this.id = json.id;
        this.semester = json.semester;
        this.section = json.section;
        this.created = json.created !== undefined ? json.created : null;
        role = json.role;
    } else {
        this.id = 0;    // System membership ID
        this.semester = null;   // Semester code
        this.section = null;  // Section Id
        this.created = null;    // When user was created
        role = null;       // Membership role
    }

    this.role = function() {
        return role;
    }

    this.setRole = function(role_) {
        role = role_;
    }
}

Member.prototype = Object.create(Membership.prototype);
Member.prototype.constructor = Member;

/**
 * Get the course section for a member
 * @param store Vuex store
 * @returns {*}
 */
Member.prototype.getSection = function(store) {
    return store.getters['course/section'](this.semester, this.section);
}

/**
 * Get an assignment for a member
 * @param store Vuex store
 * @param assigntag Assignment tag
 */
Member.prototype.getAssignment = function(store, assigntag) {
    const section = this.getSection(store);
    return section.getAssignment(assigntag);
}


// The possible member roles
// Must match values in Member.php
Member.GUEST = 'G';     ///< Guest user visiting the site
Member.USER = 'U';      ///< Standard user from User, don't use for Member
Member.DROPPED = 'D';   ///< User has dropped the course
Member.STUDENT = 'T';   ///< Enrolled student in course
Member.STAFF = 'S';     ///< Any course staff
Member.GRADER = 'R';    ///< Graders
Member.ULA = 'L';       ///< Undergraduate Learning Assistant
Member.TA = 'E';        ///< Teaching assistant
Member.INSTRUCTOR = 'I';    ///< Course instructor
Member.ADMIN = 'A';     ///< Admin

Member.prototype.getRoles = function() {
    let roles = {};
    roles[Member.GUEST] = {name: 'Guest', priority: 1};
    roles[Member.DROPPED] = {name: 'Dropped', priority: 2};
    roles[Member.USER] = {name: 'User', priority: 3, skip: true};
    roles[Member.STUDENT] = {name: 'Student', priority: 4};
    roles[Member.STAFF] = {name: 'Staff', priority: 5, skip: true};
	roles[Member.GRADER] = {name: 'Grader', priority: 6};
	roles[Member.ULA] = {name: 'Undergraduate Learning Assistant', short: 'ULA', priority: 7};
    roles[Member.TA] = {name: 'Teaching Assistant', short: 'TA', priority: 8};
    roles[Member.INSTRUCTOR] = {name: 'Instructor', priority: 9};
    roles[Member.ADMIN] = {name: 'Admin', priority: 100};

    return roles;
}


export {Member};



