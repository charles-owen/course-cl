
export const Assignment = function(data) {
    for(let property in data) {
        this[property] = data[property];
    }
}
