function tickets(peopleInLine){
    // ...
    const moneyFlow = peopleInLine
    const quarters = []
    const halfies = []
    const bigOnes = []
    let currentBill;

    const checkChange = function(){
     
        if(quarters.length > 0){
            quarters.pop()
            return "OK"
        }else{
            return "NO"
        }
    }


    for(let i = 0; i < peopleInLine.length; i++){
        currentBill = peopleInLine[i]
        console.log(quarters.length, halfies.length)

        if(currentBill === 25)
        {
            quarters.push(currentBill)
        }
        else if(currentBill === 50 )
        {
            halfies.push(currentBill)
           if(checkChange() === "NO") return "NO"
        }
        else if(currentBill === 100){
            if(checkChange() === "NO") return "NO"
            if(halfies.length > 0){
                halfies.pop()
            }else{
                if(checkChange() === "NO") return "NO"
                if(checkChange() === "NO") return "NO"
              
            }
        }
       
    }
    return "YES"
}

const result = tickets([25,25,50,100,25,50,25,100,25,25,50,100,25,25,50,100,25,100,25])
console.log(result)