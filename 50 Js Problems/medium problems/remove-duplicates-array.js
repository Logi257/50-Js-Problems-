function removeDuplicate(arr){

    let original = []

    for(let i =0;i<arr.length;i++){

        if(!original.includes(arr[i])){
            original.push(arr[i])
        }
    }
 
return original;

}

console.log(removeDuplicate([5, 2, 5, 6, 6, 7]));
