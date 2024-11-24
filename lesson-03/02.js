// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(yourNumber) {
    let answer

    if (yourNumber % 2 ) {
        let answer = false
        console.log(answer);
    }else{
        let answer = true
        console.log(answer);
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