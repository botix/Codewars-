//https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8

// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line.

// Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO


function tickets(peopleInLine){
    // ...
    const moneyFlow = peopleInLine
    const quarters = []
    const halfies = []
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