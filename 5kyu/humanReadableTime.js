// https://www.codewars.com/kata/52685f7382004e774f0001f7

/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

  HH = hours, padded to 2 digits, range: 00 - 99
  MM = minutes, padded to 2 digits, range: 00 - 59
  SS = seconds, padded to 2 digits, range: 00 - 59
  The maximum time never exceeds 359999 (99:59:59) */

function humanReadable(seconds) {
    // TODO
    let HH = parseInt(seconds / 3600)
    HH < 10 ? HH = "0" + HH : HH

    let MM = (parseInt((seconds - HH*3600 ) /60))
    MM <10 ? MM = "0" + MM : MM
    
    let SS = parseInt(seconds - (HH*3600) - (MM *60 ))
    SS <10 ? SS = "0" + SS : SS
    
    return HH + ":" + MM + ":" + SS
  }

  const result = humanReadable(3600) //'23:59:59',
  console.log(result)