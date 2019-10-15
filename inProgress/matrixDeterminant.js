//4kyu
/*Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.*/

function calculateDeterminantN2(matrix){
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
}    


function determinant(m) {
    // return the determinant of the matrix passed in
    matrixDimension = m.length
    let invertedMatrix = []

    m.forEach(x=>invertedMatrix.push([]))


    if(matrixDimension === 1){
        return m[0]
    }
    if(matrixDimension === 2){
        return calculateDeterminantN2(m)
    }
    //invert matrix
    for(let i = 0; i < matrixDimension; i++){
        for(let j = 0; j < matrixDimension; j++){
            invertedMatrix[j].push(m[i][j])
        }
    }
    
    invertedMatrix.forEach(mat=>mat.shift())
    if(invertedMatrix.length > 3) invertedMatrix.shift()

    if(invertedMatrix[0].length === 2) {
                
    }
  

    return invertedMatrix
  };








const m1 = [ [1, 3], [2,5]]
const m2 = [ 
    [2, 5, 3, 4], 
    [1,-2,-1, 3], 
    [1, 3, 4, 2], 
    [1, 3, 4, 2]
]

const result = determinant(m2)

console.log(result)
