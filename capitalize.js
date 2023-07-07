const capitalize = (string) => {
  let strArr = string.split('');
  strArr[0] = strArr[0].toUpperCase();
  let newString = strArr.join('');
  return newString;
};

export { capitalize };
