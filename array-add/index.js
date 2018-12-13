/**
 * Append variable to an array.
 * 
 * @example add(['1', '2'], '3') // ['1', '2', '3']
 * @example add([{key: 1}, {key: 2}], {key: 3}) // [{key: 1}, {key: 2}, {key: 3}]
 * 
 * @param {array} arr 
 * @param {string|object} val 
 */
function add(arr, val) {
    if (!Array.isArray(arr)) {
        throw new Error('Expected arr is an array');
    }

    arr.push(val);

    return arr;
}