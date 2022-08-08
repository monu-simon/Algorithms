    //Bubble Sort
    //O(n*2)
    function bubbleSort(arr) {
        let shifted;
        do {
            shifted = false;
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    shifted = true;
                }
            }
        } while (shifted);
    }

    arr = [98, 4, 3, 78];
    bubbleSort(arr)
    console.log(arr)