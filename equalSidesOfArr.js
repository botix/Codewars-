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
        console.log(n, leftSum, rightSum)
        if(rightSum === leftSum) return(n)
        
    }
    
    

    return -1
}

const arr = [10,-80,10,10,15,35,20]

const test = findEvenIndex(arr)
console.log(test)