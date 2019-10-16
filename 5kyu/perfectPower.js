// https://www.codewars.com/kata/whats-a-perfect-power-anyway/train/javascript

// A perfect power is a classification of positive integers:

// In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer.
//  More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that m to the power of k = n.

// Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. 
// Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

// Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. 
// However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.


var isPP = function(n){
       
    let solution;
    
    for(let i = 2; i <= n/2; i++){
        
        solution = Math.pow(n, 1/i) 
        console.log(solution.toPrecision(8), n, i)
        if(solution === 2) return [2,2]

        if(Math.pow(solution.toPrecision(8), i) === n){
            return [parseFloat(solution.toPrecision(8)), i]
        }

    }
    
    return null //required by a test case on codewars...

  }


  console.log(isPP(216))
