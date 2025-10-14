function palindrome(word){
    let reversed_word = word.split("").reverse().join("");
    return word === reversed_word? "The word is palindrome" : "The word is not palindrome"

}

console.log(palindrome("malayalam"));
