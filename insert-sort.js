//Insertion Sort
// O(n^2)
function insertionSort(arr) {
    for (let i = 1; i <= arr.length - 1; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1;
        }
        arr[j + 1] = numberToInsert
    }
}

arr = [98, 4, 3, 78];
insertionSort(arr)
console.log(arr)