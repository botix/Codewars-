//We need to sum big numbers and we require your help.

//Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

//https://www.codewars.com/kata/525f4206b73515bffb000b21

function add(a, b) {
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
        console.log(ab)
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

    return result.join(""); // Fix me!
  }

  add('63829983432984289347293874', '90938498237058927340892374089')