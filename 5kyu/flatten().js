//https://www.codewars.com/kata/flatten/train/javascript

// For this exercise you will create a global flatten method. 
// The method takes in any number of arguments and flattens them into a single array. 
// If any of the arguments passed in are an array then the individual objects within the array will be flattened
// so that they exist at the same level as the other arguments. 
// Any nested arrays, no matter how deep, should be flattened into the single array result.

// create your flatten method here
function flatten(){

    const args = [...arguments];
    console.log(args)

    function flatDeep(arr) {
        return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val) : val), []);
     };

    return flatDeep(args)
  } 
  

  const result = flatten(1, [2, 3], 4, 5, [6, [7]])

  console.log(result)