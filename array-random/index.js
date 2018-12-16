/**
 * Return random item from array.
 * 
 * @example random([1, 2, 3]) // one of [1, 2, 3], at random
 * 
 * @param {array} arr 
 */
function random(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Expected an array');
    }

    return arr[Math.floor(Math.random() * arr.length)];
}