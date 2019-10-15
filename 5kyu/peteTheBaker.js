/*Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). 
For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
Ingredients that are not present in the objects, can be considered as 0.*/

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