module.exports = function toReadable (number) {
    let objOfReadable={        
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine',
        10:'ten',
        11:'eleven',
        12:'twelve',
        13:'thirteen',
        15:'fifteen',
        18:'eighteen',
        20:'twenty',
        30:'thirty',
        40:'forty',
        50:'fifty',
        60:'sixty',
        70:'seventy',
        80:'eighty',
        90:'ninety',
        100:'hundred',
        1000:'thousand',
    }
  
  function stringOfThreeNumbers(str) {
    let resArr=[];
    if(str==0)return 'zero';
    if(str[1]==1){
        if(objOfReadable[`${str[1]}${str[2]}`]){
            resArr.unshift(objOfReadable[`${str[1]}${str[2]}`]);
        }else{
            resArr.unshift(`${objOfReadable[str[2]]}teen`);
        }
    }else{
      if(objOfReadable[str[2]]){
        resArr.unshift(objOfReadable[str[2]])
      }
      if(objOfReadable[str[1]]){
        resArr.unshift(objOfReadable[`${str[1]}0`])
      }
    }
    if(str[0]!=0){
        resArr.unshift(`${objOfReadable[str[0]]} hundred`);
    }
    return resArr.join(' ')
  }
  
  let strArr= number.toString().split('');
  for (let i=0;i<3;i++){
      if(strArr.length%3!=0){
          strArr.unshift('0');
      }
  }
  return stringOfThreeNumbers(strArr.join(''));
 
  
}
