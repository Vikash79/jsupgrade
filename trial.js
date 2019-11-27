"use strict"

console.log("trying to run a js file in non browser environment");

let sumofnum = function(a, b){
  let xy = a+b;
  return xy;
};
console.log("output from function - "+ sumofnum(2, 7));
