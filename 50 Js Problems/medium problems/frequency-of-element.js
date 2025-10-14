function frequencyOfElement(arr){

    let frequency = {}

    for(let i =0;i<arr.length;i++){

        if(frequency[arr[i]]){
            frequency[arr[i]]+=1
        }
        else{
        frequency[arr[i]]=1
        }
    }
   return frequency
}

console.log(frequencyOfElement([1, 1, 2, 3, 3, 4]));
