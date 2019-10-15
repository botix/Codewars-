// https://www.codewars.com/kata/559a28007caad2ac4e000083

function perimeter(n) {

    //calculate first n fib numb
    let first = 1;
    let second = 1;
    let third;
    let counter = 0;
    const result = [1, 1]

    function fiboX(first,second){

        if (counter == n-1) return
        third = first + second
        result.push(third)
        first = second
        second = third
        counter++
        fiboX(first, second)
        
    }

    fiboX(first, second)
   
   

    return 4*result.reduce((num, sum)=> sum += num)
}

perimeter(30)
//perimeter(30), 14098308