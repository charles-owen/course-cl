/**
 * @file
 * Constants the represent SectionStatus possible values.
 */

export let SectionStatus = function() {
}

// Constants must match those in SectionStatus.php
SectionStatus.NOTVISITED = 'N';	///< %Section has not been visited by the user
SectionStatus.VISITED = 'V';	    ///< %Section has been visited, but is not yet done
SectionStatus.DONE = 'D';		    ///< %Section is completed

SectionStatus.toString = function(status) {
    if(status === null) {
        return 'Unknown';
    }

    switch(status){
        case SectionStatus.NOTVISITED:
        default:
            return 'Not yet visited';

        case SectionStatus.VISITED:
            return 'Visited';

        case SectionStatus.DONE:
            return 'Completed';
    }
}
