// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0
let i = 1
while (i <= 20) {
    i++
    sum += i
}


const executeScript = new Function(`${this.studentCode} \n return sum`);