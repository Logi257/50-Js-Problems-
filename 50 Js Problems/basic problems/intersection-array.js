function intersection(arr1,arr2){

    let set1 = new Set(arr2)

    return arr1.filter(value=>set1.has(value))

}

console.log(intersection([5, 6, 7], [6, 7,8 ]));
