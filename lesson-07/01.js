/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(yes) {
    let string = ' '
    const iDontBelieveAnymore = yes.split(' ')
    //console.log(iDontBelieveAnymore); //[ 'hello', 'world', 'from', 'javascript' ]
    for (let i = 0; i < iDontBelieveAnymore.length; i++) {
      iDontBelieveAnymore[i] = iDontBelieveAnymore[i][0].toUpperCase() + iDontBelieveAnymore[i].substr(1) 
    }
      string = iDontBelieveAnymore.join(' ')
      console.log(string);
      return string
}

const phrase = "hello world from javascript"
capitalizeWords("hello world from javascript")
