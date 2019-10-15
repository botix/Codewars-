/*Given the string representations of two integers, return the string representation of the sum of those integers.*/

function sumStrings(a,b) { 
    const firstNum = a.split("").reverse()
    const secondNum = b.split("").reverse()
    const firstLen = firstNum.length
    const secondLen = secondNum.length
    let longest 
    const result = []
    secondLen-firstLen < 0 ? longest = firstLen : longest = secondLen
    let overflow = 0
    
    for(let i =0; i < longest; i++){

        const first = parseInt(firstNum[i]) ? parseInt(firstNum[i]) : 0
        const second = parseInt(secondNum[i]) ? parseInt(secondNum[i]) : 0

        const ab = first + second + overflow
       
        overflow = 0;
        ab > 9 ? overflow = Math.floor(ab/10) : 0
        ab === 10 ? overflow = 1 : overflow
        if(i === longest-1 && overflow >0){
          result.unshift(ab)
        }
        else
        {
          result.unshift(ab % 10)          
        }
    }

    if(result[0] === 0) result.shift()  
    
    return result.join(""); // Fix me!
  
}

console.log(sumStrings('00103', '08567'))