/**
 * Get all unique values in javaScript array (remove duplicates)..
 * 
 * @example unique([1, 1, 2, '2']) // [1, 2, "2"]
 * @example unique([{a: 1}, {a: 3}, {a: 3}, {a: 2}]) // [{a: 3}, {a: 3}, {a: 2}]
 * 
 * @param {array} arr 
 */
function unique(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Expected an array for the first argument');
    }

    // return [...new Set(arr)];
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}