/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/

const numbers = [1, 2, 3, 4, 5]


const filter = (array, callback) => {
  let final = []
  for (let i = 0; i < array.length; i++) {
    if( callback(array[i])) {
      final.push(array[i])
    }
    
  }
  return final
}

const filterCallback = (element, index) => {
  if (typeof element === 'number') {
    return element % 2 !== 0
  } else {
    return element[3] !== undefined && element[0] !== 0
  }
}

/*
const filter = () => {

  const newArray = numbers.filter((el) => {
    return el % 2 !== 0 
  }) 
}

const callback = (array, thatCallback) => {
  
  for (let i = 0; i < array.length; i++) {
    const el = array[i];

    thatCallback(el)
  }
}

callback(numbers, filter)
*/
/* 
const numbers = [1, 2, 3, 4, 5]

const filter = (newArray) => {
  const newNewArray = []
  newNewArray.push[newArray]
  console.log(newArray);
  return newArray
}

const callback = (array, thatCallback) => {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if(el % 2 !== 0) {
      newArray.push(el)
    }
    thatCallback(newArray)
  }
}

callback(numbers, filter)*/

