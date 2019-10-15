/*Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

*/

snail = function(array) {
        // enjoy
    let initLength = array.length
    let columns = []
    let solutionArr = []
    let tempArr = []
    const totalLength = reducto(array).length
    console.log(totalLength)
    
    

    array.forEach(arr =>columns.push([]))

    for(let i = 0; i < array.length; i++){
        for(j = 0; j < array.length; j++){
            columns[i].push(array[j][i])
        }
    }
     
    console.log(initLength)


    for(let i = 0; i < initLength; i ++){
        if(array.length <= 2){
            console.log("BREAKING:",array)
            array.forEach((num, index) => {
                index == array.length-1 ? solutionArr.push(num.reverse()) : solutionArr.push(num) 
            })
            return reducto(solutionArr)
        } 

        //algo
        //1
        solutionArr.push(array[0])

        //2
        array.forEach((row, index)=> {
            if(index > 0 && index < array.length-1) solutionArr.push([row[row.length-1]])

        })

        //3
        solutionArr.push(array[array.length-1].reverse())

        //4
        array.forEach((row, index)=> {
            if(index > 0 && index < array.length-1){ 
                tempArr.push([row[0]])
            }
        })
        tempArr.reverse();
        tempArr.forEach(num => solutionArr.push(num))
        tempArr = []
        
        console.log("ARRAY:",array)
        console.log("---------------------------------------------------------------")
        console.log(solutionArr)
        //Cleanup -reduce arr by 1
        array.pop()
        array.shift()

        array.forEach(arr =>{
            arr.pop()
            arr.shift()
        })
       
    }

}


function reducto(arr){
    const flatArr = []
    arr.forEach(el =>{
        for(let i = 0;i < el.length; i++){
            flatArr.push(el[i])
        }
    })
    return flatArr
}

// //n == 5
// const result = snail([
// [ 1, 2, 3, 4, 5 ],
// [ 6, 7, 8, 9, 10 ],
// [ 11, 12, 13, 14, 15 ],
// [ 16, 17, 18, 19, 20 ],
// [ 21, 22, 23, 24, 25 ] ])


// n = 7
// const result = snail([
//     [ 1, 2, 3, 4, 5, 6, 1 ],
//     [ 20, 21, 22, 23, 24, 7, 7 ],
//     [ 19, 32, 33, 34, 25, 8, 7 ],
//     [ 18, 31, 36, 35, 26, 9, 7 ],
//     [ 17, 30, 29, 28, 27, 10, 7 ],
//     [ 16, 15, 14, 13, 12, 11, 7 ],
//     [ 16, 15, 14, 13, 12, 11, 7 ]  
// ])


//n =5
// const result = snail([
//     [ 1, 2, 3, 4, 5 ],
//     [ 20, 21, 22, 23, 24],
//     [ 19, 32, 33, 34, 25],
//     [ 18, 31, 36, 35, 26],
//     [ 16, 15, 14, 13, 12]  
// ])

n = 6
const result = snail([
    [ 1, 2, 3, 4, 5, 6 ],
    [ 20, 21, 22, 23, 24, 7 ],
    [ 19, 32, 33, 34, 25, 8 ],
    [ 18, 31, 36, 35, 26, 9 ],
    [ 17, 30, 29, 28, 27, 10 ],
    [ 16, 15, 14, 13, 12, 11 ]  
])


// const result = snail(
//     [[994, 851, 258, 399, 284, 895, 106, 955, 914, 636, 214, 282 ],
//     [ 122, 161, 323, 860, 906, 800, 417, 487, 510, 946, 599, 572 ],
//     [ 882, 591, 843, 117, 270, 361, 185, 162, 377, 236, 629, 996 ],
//     [ 922, 821, 323, 986, 121, 882, 671, 384, 625, 289, 491, 520 ],
//     [ 748, 993, 429, 424, 103, 808, 273, 401, 250, 553, 439, 883 ],
//     [ 859, 723, 646, 517, 469, 433, 438, 982, 424, 160, 337, 514 ],
//     [ 525, 337, 365, 744, 487, 271, 692, 740, 191, 841, 679, 648 ],
//     [ 620, 776, 491, 921, 736, 243, 378, 975, 562, 791, 125, 100 ],
//     [ 335, 927, 451, 619, 730, 890, 323, 736, 145, 385, 277, 991 ],
//     [ 345, 987, 965, 778, 288, 144, 959, 222, 610, 794, 144, 222 ],
//     [ 725, 893, 860, 502, 579, 235, 760, 898, 880, 897, 719, 340 ],
//     [ 545, 222, 713, 280, 198, 733, 437, 419, 164, 880, 979, 906 ] ] 
// )



console.log(result)
console.log(result.length)



