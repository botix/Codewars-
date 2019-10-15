function isIsogram(str){
    //...
    if(str.trim() === "") return true
    const myStr = str
                    .toLowerCase()
                    .split("")    


    for(let i = 0; i < myStr.length; i++){
        for(let j = i + 1; j < myStr.length; j++ ){
            if(myStr[i] === myStr[j]){ return false }
        }
    }
    return true;
  }

console.log(isIsogram("agmxtcohpsMnk ?"))