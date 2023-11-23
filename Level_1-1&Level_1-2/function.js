export function sortCars(arrayCars) {
  return arrayCars.sort((a, b) => a.localeCompare(b));
}
export function sortNumber(arrayNumbers) {
  return arrayNumbers.sort((a, b) => a - b);
}

export function firstElement(inputArray) {
  return inputArray.splice(0, 1);
}
export function alleAusserLetzte(input) {
  return input.slice(0, input.length - 1);
}
export function nurLetzte(input) {
  return input.slice(input.length - 1);
}
export function ausserErste(names) {
  return names.slice(1, names.length);
}
export function deleteElement(input, element) {
  return input.filter((item) => item !== element);
}
export function deleteduplicate(numbers) {
  const output = numbers.filter(function (ele, pos) {
    return numbers.indexOf(ele) == pos;
  });
  return output;
}
export function sum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
export function random(num1, num2) {
  return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
}
export function firstChar(input) {
  return input[0].toUpperCase() + input.slice(1);
}
export function uppercase(input) {
  return input.toUpperCase();
}

export function checkLastChar(input, charInput) {
  let length = Number(input.length) - 1;
  return input[length] == charInput ? true : false;
  //   input[length] == charInput ? true : false;
}
