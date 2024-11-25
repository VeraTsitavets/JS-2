// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num_1, num_2, num_3) {
    let theBiggestOne
    if (num_1 >= num_2 && num_1 >= num_3) {
        theBiggestOne = num_1
        console.log(theBiggestOne);    
    }else if(num_2 >= num_1 && num_2 >= num_3){
        theBiggestOne = num_2
        console.log(theBiggestOne)
    }else if(num_3 >= num_2 && num_3 >= num_1){
        theBiggestOne = num_3
        console.log(theBiggestOne)
    }else{
        console.log('ermm what')
    }
    return theBiggestOne
} 

findLargest(1, 2, 3)
findLargest(3, 2, 1)
findLargest(1, 2, 5)
findLargest(5, 2, 5)
