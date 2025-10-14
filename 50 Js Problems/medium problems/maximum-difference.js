function maximumDiff(arr1){

    let min = arr1[0];
    let maxDiff = 0;

    for(let i = 1;i<arr1.length;i++){
        const diff = arr1[i] - min;
        maxDiff = Math.max(diff,maxDiff)
        min = Math.min(min,arr1[i])
    }
    
    return maxDiff

}

console.log(maximumDiff([1, 2, 90, 10, 110]));
