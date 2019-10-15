function getCount(str) {
    var vowelsCount = 0;
    
    // enter your majic here
    const myStr = str
                    .toLowerCase()
                    .split("")

    const patt =  /[aeiou]/
    myStr.forEach(letter =>{
        if(patt.test(letter)){
            vowelsCount++
        }
    })
    
    return vowelsCount;
  }
