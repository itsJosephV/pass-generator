export const getRandomChar = (min, max) => {
  const limit = max - min + 1;
  return String.fromCharCode(Math.floor(Math.random() * limit) + min);
};

export const getRandomSymbol = () => {
  const symbols = "!@#$%^&*()_-+=<>?/{}[]|";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// console.log(getRandomChar(97, 122));
// console.log(getRandomChar(65, 90));
// console.log(getRandomChar(48, 57));
// console.log(getRandomSymbol());

//? ACSII TABLE &#Html Chars
// 97 - 122 LOWERCASE a-z
// 65 - 90 UPPERCASE A-Z
// 48 - 57 NUMBERS 0-9