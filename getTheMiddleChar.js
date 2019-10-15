function getMiddle(s)
{
    let myStr;
     pivot = parseInt(s.length/2)
  //Code goes here!
  if(s.length % 2 === 0){
      
      myStr = s.slice(pivot-1, pivot+1)
     
  }else{
      myStr = s.slice(pivot, pivot+1)
  }

  return myStr
}

const result = getMiddle("Anteri")
console.log(result)