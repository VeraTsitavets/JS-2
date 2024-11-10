/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code
let factorial = 1
let i = 10
while (i) {
  factorial *= (i--)
}

const executeScript = new Function(`${this.studentCode} \n return factorial;`); // Факториал 10 равен 3628800
(0, local_cypress_1.expect)(executeScript()).to.equal(3628800);