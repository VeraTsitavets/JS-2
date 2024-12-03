/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

/*function includesElement(array, element) {

    for (let index = 0; index < array.length; index++) {

        let killinMysekf = array[index]

            if (killinMysekf === element) {
                answer = true
                //console.log( answer);
                return answer
            } else {
                answer = false
                //console.log( answer);
                return answer
            }

        //console.log(answer)
        //return answer
        }
}


    includesElement([1, 2, 3], 4) */

    /* const meow = [1, 2, 3] //['true', 'false']
    for (let index = 0; index < meow.length; index++) {
        const meowMeow = meow[index];
        
        if (meow[index] == 'false') {
            answer = true
        }else{
            answer = false
        }
        console.log(answer);
        return(answer)
        
    } */


function includesElement(array, element) {
    for (let index = 0; index < array.length; index++) {

        if (array[index] === element) {

            answer = true
            break
        } else {

            answer = false
        } 
    }
    console.log(answer)
}
    
    includesElement([1, 2, 3], 1)
    includesElement([true, false], false)