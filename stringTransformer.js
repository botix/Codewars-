function stringTransformer(str) {
    // Your code here
   const myStr = str
                    .split("")

    const resultArr = []                
    
    myStr.forEach(char =>{
        charNum = char.charCodeAt()
        if(charNum >= 97 && charNum <= 122){
            resultArr.push(char.toUpperCase())
        }else if(charNum >= 65 && charNum <= 90){
            resultArr.push(char.toLowerCase())
        }else{
            resultArr.push(char)
        }

 
    })
    resultArr.join("")
    
    return resultArr.join("").split(" ").reverse().join(" ")
  }


  const result = stringTransformer('Example string')
  console.log(result)