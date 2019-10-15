// https://www.codewars.com/kata/51689e27fe9a00b126000004    

// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. 
// The method takes in an array of strings and returns a single formatted string.
// Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

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