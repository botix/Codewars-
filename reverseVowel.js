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



const result = reverseVowels("OAva rečenica če biti izvrnuta")

console.log(result)