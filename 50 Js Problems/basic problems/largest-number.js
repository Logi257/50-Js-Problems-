function largest_number(arr){

    if(arr.length ==0) return "length of an array is 0";

    let largest = arr[0];

    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest;

}

console.log(largest_number([199, 5, 333, 100, 1]));
