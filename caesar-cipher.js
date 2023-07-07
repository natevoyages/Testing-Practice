const caesarCipher = (string, shift) => {
  const alphaMap = new Map();
  const createAlphaMap = () => {
    for(let i = 97; i <= 122; i++){
      alphaMap.set(String.fromCharCode(i), i);
    }
  };
  createAlphaMap();
  let strArr = string.split('');
  const cipherString = (strArr)=>{
    let newArr = [];
    strArr.forEach((char) => {
      let charCode = alphaMap.get(char);
      charCode = (shift + charCode);
      if (charCode > 122){
        charCode = ( ( shift + charCode ) % 123 ) + 96;
      }
      newArr.push(String.fromCharCode(charCode));

    });
    let ciphered = newArr.join('');
    return ciphered;
  };

  return cipherString(strArr);
};


export { caesarCipher };
