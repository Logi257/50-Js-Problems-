function uppercase(arr){
    let upper = [];

    for(let i = 0;i<arr.length;i++){

        upper.push(arr[i].toUpperCase())
    }

    return upper;

}

console.log(uppercase(['g', 'f', 'g']));
