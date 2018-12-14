/**
 * Return arr1 and arr2 intersect.
 * 
 * @example intersect([1, 2, 5, 6], [2, 3, 5, 6]); // [2, 5, 6]
 * @example intersect([1, 2, 2, 4, 5], [3, 2, 2, 5, 7]); // [2, 5]
 * 
 * @param {array} arr1 
 * @param {array} arr2 
 */
function intersect(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('Expected both arguments to be arrays');
    }

    let result = [];

    for (let i = 1; i < arr1.length; i++) {
        let elem = arr1[i];

        if (arr2.indexOf(elem) > -1 && result.indexOf(elem) == -1) {
            result.push(elem);
        }
    }

    return result;
}