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
                console.log(winner)
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
