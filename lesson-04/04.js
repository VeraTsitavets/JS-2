/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
const newBigStr = []

    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (element === element) {
            newBigStr.push(element)
            newBigStr.push(element)

            
        }
    }
    console.log(newBigStr);
}


doubleEachCharacter('hello')