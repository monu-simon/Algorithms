function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivotElement = arr[arr.length - 1];
    let leftArray = [];
    let rightArray = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivotElement) {
            leftArray.push(arr[i])
        } else {
            rightArray.push(arr[i])
        }
    }
    return [...quickSort(leftArray), pivotElement, ...quickSort(rightArray)]
}
arr = [8, 20, -2, 23, 89, 4, -6];
console.log(quickSort(arr))