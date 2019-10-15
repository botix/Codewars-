function middlePermutation(s) {
    //coding and coding..
    
    if(s.length <= 2 || s.length >= 26) return -1
    
    let myStr = s.split("")
    let resultsArr = []
    const length = myStr.length
    let test
    //push the first on

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


  const result = middlePermutation("abcd") //"dczxgba"
  console.log(result)