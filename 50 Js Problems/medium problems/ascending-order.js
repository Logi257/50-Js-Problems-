function ascendingOrder(arr1){

    let sortedArray = arr1.sort(function(a,b){
        return a-b;
    })
    return sortedArray;


}

console.log(ascendingOrder([5, 3, 8, 1]));
