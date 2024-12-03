// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {
    let expected = !!0

    if (num % 2 ) {
        console.log(expected);
    }else{
        expected = !!1
        console.log(expected);
    }

    return expected
}

isEven (2)
isEven (3)
isEven (0)
isEven (-1)
isEven (-2)
