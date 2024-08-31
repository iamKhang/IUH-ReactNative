let arr = [1,5,6,9,8,8,8]

Array.prototype.myReduce = function(callback, initialValue) {
    initialValue !== undefined ? result = initialValue : result = this[0];
    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i]);
    }
    return result;
}

let newArr = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(newArr);