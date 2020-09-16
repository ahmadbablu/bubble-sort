function bubbleSort(array) {
      
    for (i = 0; i <= array.length - 1; i++) {
        for (j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }

    }
    return array;
}
const numbersArray=[23, 8, 76, 45, 32, 73, 3, 13];
console.log(bubbleSort(numbersArray));