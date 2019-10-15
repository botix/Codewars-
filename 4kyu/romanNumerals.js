
function romanNumerals(){

    romanNumbersObj ={
        "1": "I",
        "2": "II",
        "3": "III",
        "4": "IV",
        "5": "V",
        "6": "VI",
        "7": "VII",
        "8": "VIII",
        "9": "IX",
        "10": "X",
        "20": "XX",
        "30": "XXX",
        "40": "XL",
        "50": "L",
        "60": "LX",
        "70": "LXX",
        "80": "LXXX",
        "90": "XC",
        "100": "C",
        "200": "CC",
        "300": "CC",
        "400": "CD",
        "500": "D",
        "600": "DC",
        "700": "DCC",
        "800": "DCCC",
        "900": "CM",
        "1000": "M",
        "2000": "MM",
        "3000": "MMM"
    }

    const invertedRomanObj = {}
    Object.entries(romanNumbersObj).forEach(obj =>{
        
        invertedRomanObj[obj[1]] = obj[0]
    })


    return{
        toRoman(num){
            let counter = 0;
            let myArr = []
            let myRomanArr = []

            function x(){
                console.log(num)
                digit = (num % 10) * Math.pow(10, counter)
                myArr.push(digit)
                num = Math.floor(num/10)

                if(num >= 10){ 
                
                    counter++
                    x()
                    
                }
                else{
                    counter++
                    digit = (num % 10) * Math.pow(10, counter)
                    myArr.push(digit)
                }
                
            }
         
            x()
            myArr = myArr.reverse()
            myRomanArr = myArr.map(num =>{
                return romanNumbersObj[num]
            })

            return myRomanArr.join("")
        },

        fromRoman(romanNum){
            
            function myRoman(num){
                let counter = 0;
                let myArr = []
                let myRomanArr = []
    
                function x(){
                    digit = (num % 10) * Math.pow(10, counter)
                    myArr.push(digit)
                    num = Math.floor(num/10)
    
                    if(num >= 10){ 
                    
                        counter++
                        x()
                        
                    }
                    else{
                        counter++
                        digit = (num % 10) * Math.pow(10, counter)
                        myArr.push(digit)
                    }
                    
                }
             
                x()
                myArr = myArr.reverse()
                myRomanArr = myArr.map(num =>{
                    return romanNumbersObj[num]
                })
    
                return myRomanArr.join("")
            }



            for(let i = 0; i < 4000; i++){
                
                if(myRoman(i) === romanNum) 

                return i
            }

        }
    }
}
const RomanNumerals = romanNumerals()


//function above


const result = RomanNumerals.toRoman("1002")
console.log(result)
