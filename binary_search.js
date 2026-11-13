function binarySearch(arr, key){
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] === key){
            return mid;
        } else if (arr[mid] < key) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    //if not found
    return -1;
}

const index = binarySearch([7,8,6,11,32,56], 56);
if (index >= 0){
    console.log("Element found at index", index);
} else {
    console.log("Element not found");
}
