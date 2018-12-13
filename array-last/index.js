/**
 * Return last element in array.
 * 
 * @example last([1, 2, 3, 4, 5]); // 5
 * @example last([{a: 1}, {b: 1}, {c: 1}]); // {c: 1}
 * @example last([true, false, [true, false]]); // [true, false]
 * @example last({}); // throws
 * @example last(); // throws
 * 
 * @param {array} arr
 */
function last(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Expected an array');
    }

    return arr[arr.length - 1];
}