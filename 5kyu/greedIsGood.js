//https://www.codewars.com/kata/5270d0d18625160ada0000e4

//Greed is a dice game played with five six-sided dice. 
//Your mission, should you choose to accept it, is to score a throw according to these rules. 
//You will always be given an array with five six-sided dice values.

// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

// Throw       Score
// ---------   ------------------
// 5 1 3 4 1   50 + 2 * 100 = 250
// 1 1 1 3 1   1000 + 100 = 1100
// 2 4 4 5 4   400 + 50 = 450

function score( dice ) {
    // Fill me in!
    const inputCopy = dice

    function x(checkVal, arr){
        let counter = 0;
        const result = [checkVal]
        arr.forEach(val =>{
            if(val === checkVal) counter++
            
        })
        result.push(counter)
        return(result)
    }
    const seen = []
    let pholder;

    const result = inputCopy.map(diceRoll =>{
        
        pholder = seen.some(el => el === diceRoll)
        seen.push(diceRoll)
        return pholder
        
    })

    const adun = result.map((result, index) =>{
        if(!result){
            return x(inputCopy[index], inputCopy)
        }
    })
    
    let points = 0;
    adun.forEach(enTaro =>{
        if(enTaro !== undefined){
            
            if(enTaro[1] >= 3 && enTaro[0] !== 1) points += enTaro[0]*100
            if(enTaro[1] >= 3 && enTaro[0] === 1) points += 1000

     
            if(enTaro[1] < 3 && enTaro[0] === 1) points += enTaro[1] * 100
            if(enTaro[1] == 1 && enTaro[0] === 5) points += 50
            if(enTaro[1] >= 4 && enTaro[0] === 1) points += 100
            if(enTaro[1] >= 4 && enTaro[0] === 5) points += 50
            console.log(enTaro)
        }
    })

    return points
  }

const result =  score( [5, 1, 3, 4, 1] ) 

console.log(result)
