/**
 * Merge another array.
 * 
 * @example merge(['1', '2'], ['3']) // ['1', '2', '3']
 * 
 * @param {array} arr 
 * @param {array} args 
 */
function merge(arr, args) {
    if (!Array.isArray(arr) || !Array.isArray(args)) {
        throw new Error('Expected arr is an array');
    }

    return arr.concat(args);
}