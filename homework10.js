//Задача1
//Создайте массив строк и выведите в консоль его длину, первый и последний элементы массива

let strings = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh","eighth", "ninth", "tenth"];

console.log("Задача 1");
console.log(strings);
console.log("Length:", strings.length);
console.log("First:", strings[0]);
console.log("Last:", strings[strings.length - 1]); //индекс последнего элемента массива

//Задача 2
//Создайте новый массив на основе массива [1, 2, 3, 4, 5, 6], в который будут входить только четные числа
//из заданного массива

let numbers = [1, 2, 3, 4, 5, 6];
let even = [];

for (let number of numbers){
    if (number % 2 == 0){ //Проверяем на чётность 
        even.push(number); //Добавляем чётные числа в новый массив
    }
}

console.log("Задача 2");
console.log("Исходный массив:", numbers);
console.log("Выборка чётных значений:", even);

//Задача 3
//Найдите максимально и минимальное значения из массива [3, 7, 2, 9, 4] и вывидите их в консоль.
//! Не используя математические методы max и min, только циклы

let randomNumbers = [3, 7, 2, 9, 4];
let min = randomNumbers[0]; //Инициализируем первым элементом массива
let max = randomNumbers[0];

for (let number of randomNumbers){
    if (number < min){
        min = number; //Определяем минимальное значение перебором и сравнением элементов
    }

    if (number > max){
        max = number; //Определяем максимальное значение
    }
}

console.log("Задача 3");
console.log(randomNumbers);
console.log("min =", min);
console.log("max =", max);


