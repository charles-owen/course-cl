import {Assignment} from './Assignment';

export let AssignmentCategory = function(data) {
    this.tag = data.tag;
    this.name = data.name;
    this.grading = data.grading !== undefined ? data.grading : null;

    this.assignments = [];
    this.assignmentsByTag = [];

    for(let assign of data.assignments) {
        const assignment = new Assignment(assign);
        this.assignments.push(assignment);
        this.assignmentsByTag[assignment.tag] = assignment;
    }

    this.getAssignment = function(tag) {
        const assignment = this.assignmentsByTag[tag];
        return assignment !== undefined ? assignment : null;
    }
}