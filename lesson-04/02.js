/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(array) {

    const newArray = []
    let newNewArray = []
    let doubleNumbers = {}
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        doubleNumbers[element] = doubleNumbers[element] >= 1 ? doubleNumbers[element] + 1 : 1
        if (doubleNumbers[element] === 2) {
        newArray.push(element)
        //if (newArray.length > 0) {}

        }else{
        newNewArray.push(element)
        }
    }
    //console.log(newArray)
    console.log(newNewArray)
    return newNewArray
    //console.log(newArray)
}



findUniqueElements([1, 2, 3, 2, 1, 4])  
