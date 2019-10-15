//3 kyu

function validateBattlefield(field) {
    // write your magic here

    //if(!checkIfEqualToTwenty(field)) return false

    validateBoard(field);

    
  }

function checkIfEqualToTwenty(field){
    let ocupied = 0;
    field.forEach(row =>{
        row.forEach(space =>{
            if(space === 1)  ocupied++;
            
        })
    })
    if(ocupied !== 20) return false;
    return true;
}

function validateBoard(field){
    let battleship = 0;
    let cruiser  = 0;
    let destroyers = 0;
    let submarines = 0;

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
           
            if(field[i][j] === 1){
                if(i > 0 && i < 9){
                    if(field[i][j-1] === 0 && field[i][j+1] === 0 && field[i-1][j] === 0 && field[i+1][j] === 0) submarines++
                }
                if(field[i+1][j] === 1 && field[i][j+1] === 0){
                    destroyers++
                    if(field[i+2][j] === 1 && field[i][j+2] === 0){
                        destroyers--
                        cruiser++
                        if(field[i+3][j] === 1 && field[i][j+3] === 0){
                            cruiser--
                            battleship ++
                        }
                    }
                }
            }
            if(field[i][j] === 1){
                if(i > 0 && i < 9){
                    if(field[i][j-1] === 0 && field[i][j+1] === 0 && field[i-1][j] === 0 && field[i+1][j] === 0) submarines++
                }
                if(field[i][j+1] === 1 && field[i+1][j] === 0){
                    destroyers++
                    if(field[i][j+2] === 1 && field[i+2][j] === 0){
                        destroyers--
                        cruiser++
                        if(field[i][j+3] === 1 && field[i+3][j] === 0){
                            cruiser--
                            battleship ++
                        }
                    }
                }
            }

        }
    }
    console.log(submarines, destroyers, cruiser, battleship)

    return 43;
}


const result = validateBattlefield(
    [[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
     [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
     [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
     [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);

console.log(result)