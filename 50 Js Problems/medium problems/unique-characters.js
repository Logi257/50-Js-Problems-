function uniqueCharacters(str){

    let uniqueChar = []

   for(let i = 0;i<str.length;i++){

    if(!uniqueChar.includes(str[i])){
        uniqueChar.push(str[i])
    }
  
   }
   return uniqueChar.join('');
}

console.log(uniqueCharacters("geeksforgeeks"));
