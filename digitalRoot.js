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
//   digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2