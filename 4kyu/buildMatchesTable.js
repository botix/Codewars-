// https://www.codewars.com/kata/organize-a-round-robin-tournament/train/javascript

// You are organizing a soccer tournament, so you need to build a matches table.
// The tournament is composed by 20 teams. It is a round-robin tournament (all-play-all), so it has 19 rounds, and each team plays once per round.
// Each team confront the others once in the tournament (each match does not repeat in the tournament).
// Your mission is to implement a function "buildMatchesTable" that receives the number of teams (always a positive and even number) and returns a matrix. 
// Each line of the matrix represents one round. Each column of the matrix represents one match. 
// The match is represented as an array with two teams. Each team is represented as a number, starting from 1 until the number of teams.

function buildMatchesTable(numberOfTeams) {
    
    let finalTable = []
    let minorTable = []
    let roundTable = []
    let half = Math.floor(numberOfTeams/2)

    for(let i = 0; i < numberOfTeams; i++)
    {   
        minorTable.push(i+1); 
    }    
    memory = minorTable[1]

    for(let i = 0; i < numberOfTeams-1; i++)
    {
        
        const moveToLastPostion = minorTable.splice(minorTable.length-1, 1)
        minorTable.splice(1, 0, moveToLastPostion[0])

        for(let j =0; j < half; j++){
        roundTable.push([minorTable[j], minorTable[minorTable.length-j-1]]) 
        }

        finalTable.push(roundTable)
        roundTable = []
        }

        return finalTable
            
    }


const result = buildMatchesTable(8)

console.log(result)
