// Write a function to reverse a string without using built-in reverse methods //
function reverse_string(string){
  let reverse = '';
  for (let i = string.length - 1; i>= 0; i--){
    reverse += string[i];
  }
  return reverse;
}
let result = reverse_string("uhsnayirP");
console.log(result);