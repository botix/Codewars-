function findNb(m) {
    // your code
    let volumeSum = 0;
 
    let result;

     function x(n){
        n++
        if(volumeSum === m) return result = n -1
        if(volumeSum > m ) return result = -1

        volumeSum += Math.pow(n, 3)

        x(n)
    }
    
    x(0)
    //while volumeSum < m
    return result 
}

const result = findNb(135440716410000) //2022

console.log(result)