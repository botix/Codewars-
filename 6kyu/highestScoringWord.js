// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){

    toWord = x
    let winner = []
    let tempWinner = []
    let heaviest = 0;
    let weight = 0;
    let wordNum=0;

    for(let i = 0; i < toWord.length; i++){
        wordNum = toWord.charCodeAt(i) -96
        
        if(wordNum !== 32-96){
            weight += wordNum
            tempWinner.push(toWord[i])

            if(weight > heaviest) {
                heaviest = weight
                winner = tempWinner
                
            }}else{
            weight = 0;
            tempWinner = []
        }
       
   
    }
    //space == 32
    return winner.join("")

}


const result = high('what time are we climbing up the volcano')

console.log(result)
