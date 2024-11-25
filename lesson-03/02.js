// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {
    let answer = false

    if (num % 2 ) {
        let answer = true
        console.log(answer);
    }else{
        
        console.log(answer);
    }

    return answer
}

isEven (2)
isEven (3)
isEven (0)
isEven (-1)
isEven (-2)
