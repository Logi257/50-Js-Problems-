function decending(arr1){

    let sortedArray = arr1.sort(function(a,b){
        return b-a
    })
    return sortedArray;

}

console.log(decending([5, 3, 8, 1]));