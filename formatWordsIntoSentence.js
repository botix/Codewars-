function formatWords(words){
    
    if(words === undefined || words === null || words.length === 0 || words ===[""]) return ""

    let theLastOne

    function isLastValid(arr){
        theLastOne = arr.pop()
        if(theLastOne === "") isLastValid(arr)    
    }

    isLastValid(words)

    words = words.filter(char =>{
        if(char != "") return char 
    })

    const result = words.length < 1 ? theLastOne : words.join(", ") + " " + "and" + " " + theLastOne
    
    return result
}


const result = formatWords(['', '', 'three'])

console.log(result)