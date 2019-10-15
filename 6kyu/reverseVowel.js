// https://www.codewars.com/kata/585db3e8eec141ce9a00008f

// In this kata, your goal is to write a function which will reverse the vowels in a string. 
// Any characters which are not vowels should remain in their original position.

function reverseVowels(str){

    const result = []
    const position = []
    const vowel = /[aeiouAEIOU]/
    const myStr = str
                    .split("")

    myStr.forEach((letter, index)=>{
        if(vowel.test(letter)) {
            result.push(letter)
            position.push(index)
        }
     })

    result.reverse()

    for(let i = 0; i < result.length; i++){
        myStr.splice(position[i], 1, result[i])
    }

    

    return myStr.join("")
}

const result = reverseVowels("This sentence vowels will be mirrored")

console.log(result)