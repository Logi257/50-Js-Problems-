function reverseArray(arr1){

    let reversedArr = []

    for(let i = arr1.length-1;i>=0;i--){
        reversedArr.push(arr1[i])
    }
     return reversedArr;

}

console.log(reverseArray([5, 6, 7, 8]));
