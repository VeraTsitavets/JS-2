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
