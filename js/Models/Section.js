import {Assignments} from './Assignments';

export const Section = function(data) {
    this.id = data.id;
    this.semester = data.semester;
    this.type = data.type;
    this.assignments = new Assignments(data.assignments);

    this.getAssignment = function(tag) {
        return this.assignments.getAssignment(tag);
    }
}
