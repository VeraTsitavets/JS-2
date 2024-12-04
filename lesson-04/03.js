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
    const newShit = []

    for (let index1 = 0; index1 < array1.length; index1++) {
        const sameNum1 = array1[index1];
        for (let index2 = 0; index2 < array2.length; index2++) {
            const sameNum2 = array2[index2];
            if (sameNum1 === sameNum2) {
                newShit.push(sameNum1)   
            } else {
                return []
            }
        }    
    }
    console.log(newShit);
    return newShit  || []  

}




findCommonElements([1, 2, 3], [7, 0, 8, 7])