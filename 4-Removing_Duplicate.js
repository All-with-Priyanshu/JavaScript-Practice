// Write a program to Remove duplicates from a string //
function removeDuplicates1(str) {
    return [...new Set(str)].join('');
}
let result = removeDuplicates1("Hello World!!");
console.log(result);

// Method second //
function removeDuplicates2(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === i) {
            result += str[i];
        }
    }
    return result;
}
let output = removeDuplicates2("Priyanshu Paintola");
console.log(output);
