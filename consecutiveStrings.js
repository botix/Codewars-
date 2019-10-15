// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

function longestConsec(strarr, k) {
    // your code

    const n = strarr.length

    if(n == 0 || k > n || k <= 0) return ""

    let longest = 0;
    let tempStr = "";
    let winner = "";

    for(let i = 0; i < n-k+1; i++){
        for(let j = 0; j < k; j++){
            
            tempStr += strarr[i+j]

    }
    if(tempStr.length > longest) {
        longest = tempStr.length
        winner = tempStr
    }

    tempStr = "";
    }


    return winner
}

const result = longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)
