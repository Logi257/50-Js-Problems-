function countVowels(word){
    let vowels = 'aeiouAEIOU';
    let count = 0;

    for(let i =0;i<word.length;i++){
        if(vowels.includes(word[i])){
            count+=1

        }
            

    }
    return count


}

console.log(countVowels("hello geeks"));
