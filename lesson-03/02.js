// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {
    let answer = false

    if (num % 2 ) {
        console.log(answer + ' false');
    }else{
        let answer = true
        console.log(answer + ' true');
    }

    return answer
}

isEven (1)
isEven (2)
isEven (3)
isEven (4)
isEven (5)
isEven (6)
isEven (7)
isEven (-1)
isEven (-2)
isEven (-3)
isEven (-4)