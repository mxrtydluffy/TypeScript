// This function returns a function that returns a string
// Add the types: 

function sayHello() {
    return function() => { return "Hello!"; };
}
// This variable contains a function that returns a string
const hello = sayHello();
// Calling the function returns the string
console.log( hello()); // Hello!
console.log( hello()); // Hello!
console.log( hello()); // Hello!
console.log( hello()); // Hello!

function mathematizer(n) {
    const sum = n;
    return function (x)s { return x * n; };
}

const m = mathematizer(3)
console.log( m(3) )   // 9
console.log( m(2) )   // 6
console.log( m(10) )  // 30
console.log( m(111) ) // 333