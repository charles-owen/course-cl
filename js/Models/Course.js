/**
 * @file
 * Abstraction of the current course
 */

import {Section} from './Section';

export const Course = function(data) {

    this.account = data.account;
    this.desc = data.desc;
    this.name = data.name;
    this.sections = [];
    this.sectionsById = [];

    for(let section of data.sections) {
        const s = new Section(section);
        this.sectionsById[section.id] = s;
        this.sections.push(s);
    }
}

