/*
https://www.codewars.com/kata/catching-car-mileage-numbers/javascript

Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. 
We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, 
and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, 
or a 0 if the number is not interesting.

Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.
"Interesting" Numbers

Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

    Any digit followed by all zeros: 100, 90000
    Every digit is the same number: 1111
    The digits are sequential, incementing†: 1234
    The digits are sequential, decrementing‡: 4321
    The digits are a palindrome: 1221 or 73837
    The digits match one of the values in the awesomePhrases array

    † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
    ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210*/

function isInteresting(number, awesomePhrases) {
    // Go to town!
    const originalNumber = number +2
    let km = 0
    let solution = -1
    

    function x(){
    number = number + km    
    if(number === 98 || number == 99) {
        solution = 1
        return
    } 
    if (number < 100) {
        solution = 0
        return
    } 

    const numberArrThrowAway = number
    const numberArr = numberArrThrowAway
                                    .toString()
                                    .split("")
    
    //any digit folowed by all zeros
    const zerosThrowAway = number
    let followedByZeros = zerosThrowAway
                                .toString()
                                .split("")
    followedByZeros = followedByZeros.map(num => parseInt(num))
    followedByZeros = followedByZeros.reduce((a,b) => b += a) === followedByZeros[0]
  

    //awesomePhrases, returns the matched number
    const awesomeMatch = awesomePhrases.find(phrase => phrase === number)

    //palindrome
    const palindromeThrowAway = number
    const reverseNum= palindromeThrowAway
                        .toString()
                        .split("")
                        .reverse()
                        .join("")

    const palindrome = number === parseInt(reverseNum)

    //every digit is the same number
    
    const allNumbersAreSame = numberArr.every(num => numberArr[0] === num)

    //number's digits are incrementing 
    const incrementing = () =>{
     return  numberArr.map((num, index) =>{
            if(index > 0){
                
                let secondNum = parseInt(numberArr[index-1]) + 1
                let compareNum
                secondNum > 9 ? compareNum = 0 : compareNum = secondNum

            return parseInt(num)  === parseInt(compareNum)
            }
            return true
        })
    }

    const isIncrementing = incrementing().reduce((a,b) => a&&b)
  

       //numbers' digits are  decrementing
       const decrementing = () =>  numberArr.map((num, index) =>{
        if(index > 0){
            let secondNum = parseInt(numberArr[index-1]) - 1
            let compareNum
            secondNum > 9 ? compareNum = 0 : compareNum = secondNum

        return parseInt(num)  === parseInt(compareNum)
        }
        return true
    })
    const isDecrementing = decrementing().reduce((a,b) => a&&b)
  
    //----------------------
    //followedByZeros, palindrome, awesomeMatch, allNumbersAreSame, isIncrementing, isDecrementing

    if((followedByZeros || palindrome || awesomeMatch || allNumbersAreSame || isIncrementing || isDecrementing) && km == 1) solution =  1
    if((followedByZeros || palindrome || awesomeMatch || allNumbersAreSame || isIncrementing || isDecrementing) && km == 1) solution =  1
    if((followedByZeros || palindrome || awesomeMatch || allNumbersAreSame || isIncrementing || isDecrementing) && km == 0) solution =  2
    console.log("KM", number, "SOLUTION", solution)

    if(km < 1) km++
    if((number !== originalNumber) && solution === -1 ) x()


}
    x()
    return solution === -1 ? 0 : solution
}

const result = isInteresting(98, [1337, 256]); // 2
console.log("final", result)