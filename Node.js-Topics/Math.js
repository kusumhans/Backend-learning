// first way to use module.exports

// let sum = (a,b) => a+b; 
// let multi = (a,b) => a*b;
// const g = 9.8;
// const PI = 3.14;

// let obj = {
//     sum: sum,
//     multi: multi,
//     g: g,
//     PI: PI,  

// }

// module.exports = obj;


// second way to use module.exports
// let sum = (a,b) => a+b; 
// let multi = (a,b) => a*b;
// const g = 9.8;
// const PI = 3.14;

// module.exports = {
//     sum: sum,
//     multi: multi,
//     g: g,
//     PI: PI,

// }
// third way to use module.exports
// module.exports.sum = (a,b) => a+b; 
// module.exports.multi = (a,b) => a*b;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;


// Now we learn about import 
 
export const sum = (a,b) => a+b;
export const multi = (a,b) => a*b;
export const div = (a,b) => a/b;
export const PI = 3.14; 