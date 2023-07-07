const capitalize = (string) => {
  let strArr = string.split('');
  strArr[0] = strArr[0].toUpperCase();
  let newString = strArr.join('');
  return newString;
};

const reverseString = (str) => {
  let strArr = str.split('');
  for (let i = 0; i < (strArr.length - 1) / 2; i++) {
    let holder = strArr[i];
    strArr[i] = strArr[strArr.length - 1 - i];
    strArr[strArr.length - 1 - i] = holder;
  }
  let newArr = strArr.join('');

  return newArr;
};

export { capitalize, reverseString };
