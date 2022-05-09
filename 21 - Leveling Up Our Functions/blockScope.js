// Block Scope

let radius = 8;
if (radius > 0) {
  const PI = 3.14159;
  let msg = 'Hi!';
}
console.log(radius);
console.log(PI); // not accessible because it's scoped to the codeblock

// Block scope also applies to loops using let and const

for(let i = 0; i < 5; i++) {
  let msg = 'Hellllo!';
  console.log(msg);
}
console.log(msg); // not accessible

  // However, using var there is no block scope
  for(var i = 0; i < 5; i++) {
    var msg = 'Hellllo!';
    console.log(msg);
  }
  console.log(msg); // accessible 
  console.log(i); // accessible

  