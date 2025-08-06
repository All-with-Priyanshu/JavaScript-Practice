// Write a function to check whether the string is a palindrome or not //
function isPalindrome(string){
    let reversed = '';
    for(let i = string.length - 1; i>=0; i--){
        reversed += string[i];
    }
    return reversed === string;
}
let output = isPalindrome("MadaM");
console.log(output);