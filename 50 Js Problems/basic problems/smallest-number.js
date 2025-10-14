function smallest_number(arr){

    if(arr.length ===0 )  return "length of an array is 0";

    let smallest = arr[0];

    for(let i = 1;i<arr.length;i++){

        if(arr[i]<smallest){
            smallest=arr[i]
        }
}

    return smallest;

}

console.log(smallest_number([5, 10, -1, 8]))