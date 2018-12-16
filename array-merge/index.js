/**
 * Merge another array (without removing duplicates).
 * 
 * @example merge(['1', '2'], ['1', '3']) // ['1', '2', '3']
 * @example merge([{a: 1}, {b: 2}], [{b: 2}, {c: 3}]) // [{a: 1}, {b: 2}, {b: 2}, {c: 3}]
 * 
 * @param {array} arr1
 * @param {array} arr2
 */
function merge(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('Expected arr is an array');
    }

    //ES5 return arr1.concat(arr2);
    return [...arr1, ...arr2];
}