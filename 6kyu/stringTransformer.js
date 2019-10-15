//https://www.codewars.com/kata/5878520d52628a092f0002d0

//Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.

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