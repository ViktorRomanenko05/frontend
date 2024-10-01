// Задача 1. Создайте новый массив, в который будут входить только значения имен
const persons = [ { name: "John", age: 20 }, { name: "Tom", age: 22 }, { name: "Bob", age: 21 }, ];

//Решение:
const namesArray = persons.map(obj => obj.name);
console.log(namesArray);


//Задача 2. Необходимо получить новый массив, в котором будет отсутствовать
//выбранный элемент
const arrayExample = [ '1e4e2e4c-056e-4f1d-9463-7b8b19a8cf33',
'9b7e4f3e-bd7f-4c6c-8f69-3c63b013faba',
'c0e1f8b2-1d0f-4f5b-86e5-bc4e5f8c8b7e',
'd1f6c0a3-8b9e-4c5a-9147-b6f7d9f6a5d4',
'e3a9b7d1-4f8b-41a9-a3f1-1e6a9d1c3b2e',
'f4b1c8d2-5c7a-42e9-9d7b-4c6a5f8e9b7c' ];

const element = 'd1f6c0a3-8b9e-4c5a-9147-b6f7d9f6a5d4'

//Решение:
const arrayExclude = arrayExample.filter(code => code !== element);
console.log(arrayExclude);

// Задача 3. Напишите функцию, которая принимает массив объектов и возвращает массив значений одного из ключей этих объектов (name)
const users = [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 } ];

//Решение
const names = (objectsArray) => {
    return objectsArray.map(obj => obj.name);
}
const result = names(users);
console.log(result);

//Задача 4. Напишите функцию, которая принимает массив чисел и возвращает
//количество четных чисел в массиве.

const arrayNumbers = [1, 2, 3, 4, 5, 6]

//Решение
const evenNumbers = (arrayOfNumbers) => {
    let countEvens = arrayNumbers.filter(element => element%2 === 0);
    return countEvens.length;
}
let evenResult = evenNumbers(arrayNumbers);
console.log(evenResult);



