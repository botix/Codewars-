function cakes(recipe, available) {
    // TODO: insert code2
    const recepieItems =  Object.keys(recipe).map(recepie => recepie)
    const availableItems = Object.keys(available).map(item => item)

    

   const checkIfEnoughtItems = 
         recepieItems.map(recItem =>{
            return availableItems.find(avblItem=>{
             return   recItem === avblItem
            })
        })    

    if(!checkIfEnoughtItems.reduce((a,b)=> a && b) === true) return 0
    

    const solution = []

    recepieItems.map( item =>{
            solution.push(available[item]/recipe[item])
        })

    solution.sort((a,b) => a - b)
    
    return Math.floor(solution[0])

}

  const result = cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
  const result2 = cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})

  console.log(result)
  console.log(result2)