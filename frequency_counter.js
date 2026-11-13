const countFrequency = (arr) => {
    const freq = {};
    
    for (const item of arr){
        if(item in freq){
            freq[item]++;
        }
        else{
            freq[item] = 1;
        }
    }
    return freq;
}

console.log(countFrequency([1,2,2,3,3,3]));