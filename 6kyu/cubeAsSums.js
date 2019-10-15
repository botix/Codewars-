// https://www.codewars.com/kata/58af1bb7ac7e31b192000020
// Can you compute a cube as a sum?

// In this Kata, you will be given a number n (where n >= 1) and your task is to find n consecutive odd numbers whose sum is exactly the cube of 

function findSummands(n){
    //replace with your solution ...
    if(n < 1) return 
    const resultArr = [];

    const cube = Math.pow(n, 3)
    const square = Math.pow(n, 2)

    if(square % 2 !== 0){
        resultArr.push(square)
        let multiplier = 1;
        for(let i = 1; i < n; i+=2)
        {
            resultArr.push(square - 2*multiplier)
            resultArr.push(square + 2*multiplier)
            multiplier++
        }            

    }
    else{
        let multiplier = 1;
        for(let i = 1; i < n; i+=2)
        {
            resultArr.push(square - 2*multiplier + 1)
            resultArr.push(square + 2*multiplier - 1)
            multiplier++
        }     
    }   
  
    const sorted = resultArr.sort((a, b) => a - b)

    return sorted;
  }

  console.log(findSummands(408))