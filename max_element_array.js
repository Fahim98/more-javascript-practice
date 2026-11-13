function findMax(arr) {
    if(arr.length === 0){
        return null;
    }
    let max = arr[0] //first element of array always assumed as max

//comparing current index with next index; if arr[i]>max then max gets updated to max = arr[i]
    for(let i = 1; i < arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([3,7,2,9,5]));
console.log(findMax([-10, -3, -20]));