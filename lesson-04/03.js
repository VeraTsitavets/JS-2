/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements(array1, array2) {
    const veryImportant = []

    for (let index1 = 0; index1 < array1.length; index1++) {
        const sameNum1 = array1[index1];
        for (let index2 = 0; index2 < array2.length; index2++) {
            const sameNum2 = array2[index2];
            if (sameNum1 === sameNum2) {
                veryImportant.push(sameNum1)   
            }
        }   
    }

    console.log(veryImportant);
    return veryImportant
}

findCommonElements([1, 2, 3], [2, 3, 4, 5, 6]) //2, 3
findCommonElements([5, 2, 3, 6], [2, 3, 5, 6]) //5, 2, 3, 6
findCommonElements([1, 2, 3, 11, 17, 0], [2, 3, 5, 6, 4, 7, 8, 9, 0, 10, 11, 12, 13, 15, 16, 17, 18]) //2, 3, 11, 17, 0
findCommonElements(['apple', 'banana', 'cherry'], ['banana']) //'banana'
findCommonElements(['apple', 'banana'], ['orange', 'melon']) //[]