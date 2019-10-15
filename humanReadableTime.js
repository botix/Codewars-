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