let arr = [5, 2, 4, 1, 15, 8, 3];

Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(this[i] * 2);
    }
    return result;
}

console.log(arr.myMap());