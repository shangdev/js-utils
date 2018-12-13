/**
 * Render compare format from arr.
 * 
 * @example format([{title: '张三', age: '22'}, {title: '李四', age: '20'}]) // [{'title', '张三', '李四'}, {'age', '22', '20'}]
 * 
 * @param {array} arr 
 */
function format(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Expected arr is an array');
    }

    let tmp = [];

    for (let i in arr[0]) {
        tmp.push([i]);
    }

    for(let i in arr){
        for(let j in arr[i]){
            for(let k in tmp){
                if(tmp[k][0] === j){
                    tmp[k].push(arr[i][j]);
                }
            }
        }
    }

    return tmp;
}