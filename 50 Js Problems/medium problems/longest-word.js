function longestWord(str){

    let longest = ''
    let values = str.split(" ")
    
    for(let word of values){
        if(word.length>longest.length){
            longest = word
        }
}

    return longest;

}

console.log(longestWord('GeeksForGeeks is great'));
