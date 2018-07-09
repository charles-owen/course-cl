/**
 * @file Member of a course
 * Attaches to a user Object
 */

import {Membership} from '../../../users/js/Users/Membership.js';

let Member = function(json) {
    Membership.call(this);

    let role = 'G';

    if(json !== undefined) {
        this.id = json.id;
        this.semester = json.semester;
        this.section = json.section;
        role = json.role;
    } else {
        this.id = 0;    // System membership ID
        this.semester = null;   // Semester code
        this.section = null;  // Section Id
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

// The possible member roles
// Must match values in Member.php
Member.GUEST = 'G';     ///< Guest user visiting the site
Member.USER = 'U';      ///< Standard user from User, don't use for Member
Member.DROPPED = 'D';   ///< User has dropped the course
Member.STUDENT = 'T';   ///< Enrolled student in course
Member.STAFF = 'S';     ///< Any course staff
Member.GRADER = 'R';    ///< Graders
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
    roles[Member.TA] = {name: 'Teaching Assistant', priority: 7};
    roles[Member.INSTRUCTOR] = {name: 'Instructor', priority: 8};
    roles[Member.ADMIN] = {name: 'Admin', priority: 100};

    return roles;
}


export {Member};



