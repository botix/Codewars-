/* You are given a string s. Every letter in s appears once.

Consider all strings formed by rearranging the letters in s. After ordering these strings in dictionary order, return the middle term. (If the sequence has a even length n, define its middle term to be the (n/2)th term.)
Example

For s = "abc", the result should be "bac". The permutations in order are: "abc", "acb", "bac", "bca", "cab", "cba" So, The middle term is "bac".
*/ 

function middlePermutation(s) {
    //coding and coding..
    
    if(s.length <= 2 || s.length >= 26) return -1
    
    let myStr = s.split("")
    let resultsArr = []
    const length = myStr.length
    let test
   

    //algo 
    for(let j = 0; j <length ; j++){

        for(let i = 0; i < length; i++){
            test = myStr.splice(1,1)
            myStr.push(test)
            resultsArr.push(myStr.reduce((a,b) => a+b))
        }
    
        test= myStr.splice(0,1)
        myStr.push(test)
    }


    const half = Math.floor(resultsArr.length / 2)
    resultsArr = resultsArr //.sort()
    console.log(resultsArr, half)
    return resultsArr[half-1]
  }


  const result = middlePermutation("abcd") 
  console.log(result)