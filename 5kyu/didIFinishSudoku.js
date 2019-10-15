//https://www.codewars.com/kata/53db96041f1a7d32dc0004d2

//Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'


function doneOrNot(board){
    //your code here
    myTestArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    myBoxArr = [[],[],[],[],[],[],[],[],[]]
    myColumnArr = [[],[],[],[],[],[],[],[],[]]

    //check rows
    const evaluate = board.map(row =>{
        return row.reduce((num, sum) => sum += num) === 45
        
    })
     
    if(evaluate.reduce((a, b) => a && b) === false) return "Try again!"

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length; j++){
            
            //make teh columns
            myColumnArr[j].push(board[i][j])
            //make teh box
            if (i <= 2){
                
                if(j  <= 2){
                    myBoxArr[0].push(board[i][j])
                    
                }
                else if(j >= 6){
                    myBoxArr[2].push(board[i][j])
                }else{
                    myBoxArr[1].push(board[i][j])
                }

            
            }else if(i >= 3 && i <= 5){

                if(j  <= 2){
                    myBoxArr[3].push(board[i][j])
                }
                else if(j >= 6){
                    myBoxArr[5].push(board[i][j])
                }else{
                    myBoxArr[4].push(board[i][j])
                }

            }else if(i >= 6 && i <= 8){
                if(j  <= 2){
                    myBoxArr[6].push(board[i][j])
                }
                else if(j >= 6){
                    myBoxArr[8].push(board[i][j])
                }else{
                    myBoxArr[7].push(board[i][j])
                }

            }

        }
    }
   

    //Check if number is repeating itself

    function isUnique(arr){
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i])
            for(let j = 1; j < arr.length; j++)
            if(arr[i] === arr[i+j]) return true
            
        }
    }

   let artanis = true;
    board.forEach(arr =>{
                 if(isUnique(arr) === true) artanis = false
    })
    let preatorFenix = true

    myColumnArr.forEach(arr =>{
        if(isUnique(arr) === true) preatorFenix = false
    })
    let tassadar = true
    
    myBoxArr.forEach(arr =>{
        if(isUnique(arr) === true) tassadar = false
    })

    const adun = artanis && preatorFenix && tassadar

    return adun ? "Finished!" : "Try again!"
}




const result = doneOrNot([
    [5, 3, 4, 6, 7, 9, 9, 1, 1], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]])

    console.log(result)

