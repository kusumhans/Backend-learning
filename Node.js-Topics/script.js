// console.log("hello All");
// let n = 3;

// for(let i=0; i<n; i++){
//     console.log("today i am starting backend", i);
// }

// console.log("byy😜")

// process.argv:-
// console.log(process.argv);

// ex  of process.argv
// let arg = process.argv;

// for(let i=2; i<arg.length; i++){
//     console.log("hello ", arg[i]);
// }

// module.exports topic 
// first way to use module.exports
// const math = require("./Math")
// console.log(math.sum(4,5));
// console.log(math.multi(4,5));

// second way to use module.exports
// const math = require("./Math")
// const math = require("./Math")

// console.log(math.sum(3,5));
// console.log(math.g);
// console.log(math.PI);
// console.log(math.multi(5,2));


// / now we study aobut module.exports for directory to directory 
// let Info = require("./fruits")
// console.log(Info)
// console.log(Info[2].color);


// now we study about import
import {PI, sum, multi, div} from './Math.js'
import { generate } from "random-words";

console.log(generate());// it help to generate random words it is the ex of import
console.log(sum(1, 4));
console.log(multi(1, 4));
console.log(div(1, 4));
console.log(PI);