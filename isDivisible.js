console.time()
var palindromeChecker = function(string) {
    //your code goes here
    const result = string
                        .toLowerCase()
                        .split("")
                        .reverse()
                        .join("")

    return string.toLowerCase() === result
  }


  const res = palindromeChecker("Bobobb")
  console.log(res)
  console.timeEnd()