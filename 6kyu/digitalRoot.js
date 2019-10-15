//https://www.codewars.com/kata/541c8630095125aba6000c00

// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. 
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
    // ...
    
    const result = n
                .toString()
                .split("")
                .map(val => parseInt(val))
                .reduce( (num, sum) => sum += num)

   
    return result > 9 ? digital_root(result) : result
} 

const n = 493193

console.log(digital_root(n))
