//   O(n) - Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([10, 20, 30, 4, 5], 30));