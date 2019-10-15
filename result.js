function numericals(s){
  
  const myStr = s.split("")

  const magistraVitae = memoryObject()
  const possibleResult = []

  myStr.forEach(char =>{

        magistraVitae.updateMemoriae(char)
        possibleResult.push(magistraVitae.getMemoriae(char))
  })

  console.log(magistraVitae.getObject())
  return possibleResult.join("")
}

  function memoryObject(){
      const memoriae = {}
      return {

        updateMemoriae(key){
            if(memoriae[key] === undefined){
                memoriae[key] = 1
            }else{
                memoriae[key] = memoriae[key] + 1
            }
        }, 
        getMemoriae(key){
           return memoriae[key]
        }, 
        getObject(){
            return memoriae
        }
      }
  }



console.log(numericals("Hello, World! It\'s me, JomoPipi!"))