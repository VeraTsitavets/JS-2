/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  // your code
  let answer
  let substract = str - 0
  let shit = isNaN(str)

  if(typeof substract === 'number' && str !== ' ' && str !== " "){
    answer = true
  } else if (shit = true){
    answer = false
  } else if (str === ' ' || str === " "){
    answer = false
  } else {
    answer = false
  }

  if (shit === true) {
    answer = false
  }
  console.log(answer);
  return answer
}


/* function isNumericOr(str1) { // мой рефактор :3
  let meow = true
  let substractO = str1 - 0
  let shiter = isNaN(str1)
  typeof substractO === 'number' && str1 !== ' ' && str1 !== " " && shiter != true ? meow = true : meow = false
  console.log(meow);
  return meow
} 

isNumericOr("123")
isNumericOr("12.3")
isNumericOr("123abc")
isNumericOr("abc")
isNumericOr(" ") */

isNumeric("123")
isNumeric("12.3")
isNumeric("123abc")
isNumeric("abc")
isNumeric(" ")

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
