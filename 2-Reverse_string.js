function reverse_string(str){
    let reverse = "";
    for(let i = str.length - 1; i<0; i--){
        reverse += str[i];
    }
    return reverse
}
let result = reverse_string("Hello World");
console.log(result);