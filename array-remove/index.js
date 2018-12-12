/**
 * Remove first element in array
 * 
 * @example firstRemove([1, 2, 3, 4, 5]); // [2, 3, 4]
 * @example firstRemove([{a: 1}, {b: 1}, {c: 1}]); // [{b: 1}, {c, 1}]
 * @example firstRemove([true, false, [true, false]]); // [false, [true, false]]
 * @example firstRemove({}); // throws
 * @example firstRemove(); // throws
 * 
 * @param {array} arr 
 */
function firstRemove(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('expected an array');
    }

    return arr.slice(1);
}

/**
 * Remove last element in array
 * 
 * @example lastRemove([1, 2, 3, 4, 5]); // [1, 2, 3, 4]
 * @example lastRemove([{a: 1}, {b: 1}, {c: 1}]); // [{a: 1}, {b, 1}]
 * @example lastRemove([true, false, [true, false]]); // [true, false]
 * @example lastRemove({}); // throws
 * @example lastRemove(); // throws
 * 
 * @param {array} arr 
 */
function lastRemove(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('expected an array');
    }

    return arr.slice(0, -1);
}