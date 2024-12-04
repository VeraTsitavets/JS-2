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
    let doubleNumbers = 0

    for (let index = 0; index < array.length; index++) {
        let okayWrong = array[index]
    
        if (doubleNumbers === array.indexOf[index]) {
            doubleNumbers++
            console.log(doubleNumbers);
        } else {
            array.splice(index, 1)
            console.log(array);

            newArray.push(array)
            console.log(newArray);
            break
        } 
    }
    //console.log(newArray)
    //return(newArray)
}


findUniqueElements([1, 2, 3, 2, 1, 4])  

/*const array = [1, 2, 3, 2, 1, 4]
const newArray = []
let doubleNumbers = 0
const doubleNumbersArray = []


for (let index = 0; index < array.length; index++) {
    const okayThat = array[index];
    //console.log(okayThat);

    for (let doubleNumbers = 0; doubleNumbers < array.length; doubleNumbers++) {
        const element = array[doubleNumbers];
        
    }
    if (array[index] !== array[doubleNumbers]) {
        doubleNumbersArray.push(array[index])
        console.log(doubleNumbersArray);
        
    }

    /* if (array[index] === okayThat) {
        doubleNumbersArray.push(okayThat)
        array.splice(array[index], 1)
        console.log(doubleNumbersArray);
        console.log(array);
    }else if(array[index] !== okayThat) {
        console.log( array = ' yay');
        
    } */
    


//}     //console.log(newArray)
    //return(newArray)