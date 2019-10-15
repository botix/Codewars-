function buildMatchesTable(numberOfTeams) {
    
    let round = 0;
    let finalTable = []
    let minorTable = []
    let numbers = [1]

    for(let i= 0; i < numberOfTeams-1; i++){
        minorTable.push([])
        finalTable.push([])
        numbers.push(i+2)
    }
    
    let robin = 0;
   

    for(let i = 0 + round; i < 1; i++){
        for(let j = 1+round; j < numberOfTeams; j++){
            
            minorTable[robin].push([i+1, j+1])
            finalTable[robin].push(i+1, j+1)
            robin++
            if(robin == numberOfTeams-1) {
                robin = 0   
            };
        }
        round++
    }

    
    let taken =[]

    for(let i = 1; i < finalTable.length+1; i++){
        for(let j = 0; j < 2; j++){

           taken.push(finalTable[i-1][j])
            
        }
        console.log(taken)
        for(let k = 0; k < taken.length; k++){
            
        }

        taken = []
    }



    
    return finalTable
}


const result = buildMatchesTable(10)

console.log(result)