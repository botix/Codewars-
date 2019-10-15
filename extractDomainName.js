function domainName(url){
    //your code here
    const www = "www"
    const http = "http://www"
    const https = "https://www"
 
    
    const divided = url.split(".")
    const divAgain = divided[0].split("//")


    if(divided[0] === www || divided[0] === http || divided[0] === https){
     
        return divided[1]
    }else if(divAgain.length >= 2){
       
        return divAgain[1]
    }else{
       
        return divided[0]
    }


}
    
  console.log(domainName("www.xakep.ru"))
  console.log(domainName("http://www.zombie-bites.com"))
  console.log(domainName("http://d9emch-apgoap-c1l-g0bq85srj1.co.za/default.html"))
  console.log(domainName("j8iaaaxcc.co/warez/"))
  console.log(domainName("http://github.com/carbonfive/raygun"))
