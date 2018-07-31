import {AssignmentCategory} from './AssignmentCategory';

export const Assignments = function(data) {

    this.categories = [];
    for(let category of data.categories) {
        this.categories.push(new AssignmentCategory(category))
    }

    this.getAssignment = function(tag) {
        for(let category of this.categories) {
            let assignment = category.getAssignment(tag);
            if(assignment !== null) {
                return assignment;
            }
        }

        return null;
    }

}