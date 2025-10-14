
// falsy values = 0, false, '', null, undefined, and NaN

function falsy(arr){
    let trueValues = [];

    for(let i = 0; i<arr.length;i++){

        if(arr[i]){
            trueValues.push(arr[i])
        }
    }

    return trueValues;


}

console.log(falsy([0, 5, false, 6, '', 7]));
