module.exports = function check(str, bracketsConfig) {
  let i = 0;
  for(let i=0; i<str.length; i++) 
  {
    let j = 0;
    while (!bracketsConfig[j].includes(str[i]))
      j++;
    if (bracketsConfig[j][0] == str[i] && bracketsConfig[j][1] == str[i + 1]) 
    {
      str=str.substr(0,i)+str.substr(i+2);
      i-=2;
      if (i < -1) i = -1;
    }    
  }
  return str.length == 0;
}