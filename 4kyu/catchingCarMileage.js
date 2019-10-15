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
  

       //number's digits are  decrementing
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