//https://www.codewars.com/kata/525caa5c1bf619d28c000335

// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? 
// Our goal is to create a function that will check that for us!
// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O"

function isSolved(board) {
    // TODO: Check if the board is solved!
    const columns =[[],[],[]]
    const diagonals = [[],[]]
    const rows = board
    for(let i=0; i < board.length; i++){
        for(let j=0; j< board.length; j++){
            
            columns[j].push(board[i][j])
            
            if(i === j){
                diagonals[0].push(board[i][j])
            }

            if( (i===1 && j ===1) || (i===2 && j ===0) || (i===0 && j ===2)  ){
                diagonals[1].push(board[i][j])
            }
        }     
    }


    function deduce(arr){

        const isWon = arr.reduce((a, b) => a +""+ b)
        if(isWon === "222") return 2
        if(isWon === "111") return 1
        
        const isStillOn = arr.some(field =>{
           return  field === 0
        })
        if(isStillOn === true){ 
            return -1
        }else{
            return 0
        }
    }


    const evalArr = []
    rows.forEach(row =>{
        evalArr.push(row)
    })
    columns.forEach(column =>{
        evalArr.push(column)
    })
    diagonals.forEach(diagonal =>{
        evalArr.push(diagonal)
    })


    const winner = evalArr.map(row =>{
        return deduce(row)
        
    })
   
    let result = 0;
    if(winner.some(val => val === -1)) result = -1

    winner.forEach(value =>{

        if(value === 1) result =  1;
        if(value === 2) result =  2;
        
    })

    

    return result
}

const isIt = isSolved([
    [1,2,0],[0,1,2],[0,0,1]
])

console.log(isIt)


//     -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,

// 0 if it's a cat's game (i.e. a draw).