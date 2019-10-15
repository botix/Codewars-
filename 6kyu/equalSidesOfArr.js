// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

// You are going to be given an array of integers. 
// Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
// If there is no index that would make this happen, return -1.

function findEvenIndex(arr)
{
    arrSum = arr.reduce((num, sum = 0)=> sum += num)
    //array sums to 0 
    if(arrSum === 0) return 0;
    
    let n = 0;
    let leftSum = 0;
    let rightSum = 0;

    for(let n = 0; n < arr.length; n++){
        leftSum = 0;
    for(let i=0; i<arr.length+1; i++){
       
        if(i < n){
            leftSum += arr[i]
        }else if(i > n){
            rightSum = arrSum - (arr[n] + leftSum)
        }
    }
    
    if(rightSum === leftSum) return(n)
        
    }

    return -1
}

const arr = [10,-80,10,10,15,35,20]

const test = findEvenIndex(arr)
console.log(test)