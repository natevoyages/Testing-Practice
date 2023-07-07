const caesarCipher = (string, shift) => {
  let strArr = string.split('');
  const cipherString = (strArr)=>{
    let newArr = [];
    strArr.forEach((char) => {
      let charCode =  char.charCodeAt(0);
      if(charCode >= 97 && charCode < 123){
        charCode = (shift + charCode);
        if (charCode > 122){
          charCode = ( charCode  % 123 ) + 97;
        }
      }
      else if (charCode >= 65  && charCode <= 90){
        charCode = (shift + charCode);
        if (charCode > 90){
          charCode = ( charCode  % 91 ) + 65;
        }
      }
      newArr.push(String.fromCharCode(charCode));

    });
    let ciphered = newArr.join('');
    return ciphered;
  };

  return cipherString(strArr);
};


export { caesarCipher };
