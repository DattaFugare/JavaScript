// are loss tight

let a = 4;
var b = 5;
var type = typeof (a);
console.log(typeof (a))
console.log(type)
console.log(a)
console.log(b)

// let a=6;  let not allow redeclear
var b = 7;  // var allow redeclear .
console.log(b);
b = 11;  /* both let and var are allows re aasinging */
a = 10;
console.log(b)
console.log(a)


const z = 100;
console.log(z)
/*   can't re assign
z=150;
console.log(z)
  const z ="dattatray";   can't redeclare 
console.log(z)*/

let name = "dattatray";
console.log(name);
console.log(typeof (name));


let x = a + b;
console.log(x);
console.log(typeof (x));

let req = true;
console.log(typeof (req))
console.log(!req)