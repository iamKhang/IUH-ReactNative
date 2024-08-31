let arr = [5, 2, 4, 1, 25, 18, 3];

Array.prototype.filterFn = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}
arr = arr.filterFn(age => age >= 18);
console.log(arr);

