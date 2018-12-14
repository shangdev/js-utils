/**
 * Remove arr2 from arr1.
 * 
 * @example remove([1, 2, 3, 4, 5, 6], [1, 3, 6]); // [2, 4, 5]
 * 
 * @param {array} arr1 
 * @param {array} arr2 
 */
function remove(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('Expected both arguments to be arrays');
    }

    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        let elem = arr1[i];

        if (arr2.indexOf(elem) == -1) {
            result.push(elem);
        }
    }

    return result;
}

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
        throw new Error('Expected an array');
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
        throw new Error('Expected an array');
    }

    return arr.slice(0, -1);
}