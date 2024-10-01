//-------------------------------------------- ЗАДАЧА 1 --------------------------------------------------

//У вас есть массив чисел [2, 4, 6, 8, 10].
//Напишите функцию для удвоения каждого значения в массиве (массив нужно передать аргументом)
//и вывода результата в консоль. Вызовите функцию для демонстрации результата

let numbersArray = [2, 4, 6, 8, 10];

//Вариант решения №1
function doubleFirst (arrayOfNumbers){

    for (let number of arrayOfNumbers){   //Согласно заданию работаем с исходным массивом, без создания копии
        number = arrayOfNumbers.shift();  //Вырезаем элементы из начала массива
        arrayOfNumbers.push(number * 2 ); //Умножаем на 2 и добавляем в конец
    }
    return arrayOfNumbers;
}

console.log("Задача 1, решение 1");
console.log(doubleFirst(numbersArray)); // [4, 8, 12, 16, 20]

//Вариант решения №2
//Эта идея появилась позже и кажется более простой и надёжной.
//Первоначальный вариант сохранил на память =)

function doubleSecond (arrayOfNumbers) {

for (i = 0; i < arrayOfNumbers.length; i++){
    arrayOfNumbers[i] = arrayOfNumbers[i]*2;
}
return arrayOfNumbers;
}
console.log("Задача 1, решение 2");
console.log(doubleSecond(numbersArray)); //Так как исходный массив уже удвоен ранее
                                         //получим [8, 16, 24, 32, 40]

//Вариант решения №3
//Если всё же в задании имелось в виду не изменять исходный массив, а вернуть новый
//с удвоенными значениями - просто оставлю здесь это решение :)

function doubleThird (arrayOfNumbers){
    let resultArray = [];
    for (let number of arrayOfNumbers){
        resultArray.push(number*2)
    }
    return resultArray
}
console.log("Задача 1, решение 3");
console.log(doubleThird(numbersArray)); //[16, 32, 48, 64, 80]

//-------------------------------------------- ЗАДАЧА 2 -------------------------------------------------------

//Напишите функцию, которая принимает строку и число n, а затем возвращает первые n символов строки.
//Для отображения результа работы функции, вызовите её три раза с различными параметрами,
//результат каждого вызова присвойте отдельной переменной и выведите переменные в консоль

let stringForTaskTwo = "The most important thing is to make a decision and take action."

//Вариант решения №1 (декларативный)

function stringCutter(userString, cutCharsNumber){
    return (userString.substring(0, cutCharsNumber)) //Используем встроенную функцию "substring"
}

let resultOne = stringCutter(stringForTaskTwo, 3);
let resultTwo = stringCutter(stringForTaskTwo, 8);
let resultThree = stringCutter(stringForTaskTwo, 18);

console.log("Задача 2, решение 1");
console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);

//Вариант решения №2 (императивный)

function stringCutterTwo(userString, cutCharsNumber){
let resultString = "";

for (i = 0; i < cutCharsNumber && i < userString.length; i++){
resultString += userString[i];                       //Формируем необходимую строку с помощью цикла "for"
}
return resultString;
}

let resultFour = stringCutterTwo(stringForTaskTwo, 24);
let resultFive = stringCutterTwo(stringForTaskTwo, 35);
let resultSix = stringCutterTwo(stringForTaskTwo, 47);

console.log("Задача 2, решение 2");
console.log(resultFour);
console.log(resultFive);
console.log(resultSix);



//---------------------------------------------- ЗАДАЧА 3 -------------------------------------------------------

//У вас есть массив чисел [10, 15, 20, 25, 30].
//Напишите функцию для вычисления среднего значения элементов массива (массив нужно передать аргументом) и вывода
//результата в консоль. Вызовите функцию для демонстрации результата

let arrayTaskThree = [10, 15, 20, "25", 30];

function averageValue(arrayOfNumbers){
if (arrayOfNumbers === undefined || arrayOfNumbers === null || arrayOfNumbers.length === 0){
    return null    //Проверяем входящий массив и если он пуст либо не определён - возвращаем null
}
let sumOfArray = 0;
for(i=0; i < arrayOfNumbers.length; i++){
let element = Number(arrayOfNumbers[i]); //Без этого явного преобразования в случее нахождения среди элементов
    if(!isNaN(element)){                 //строки пригодной к преобразованию в число (например "25") результат вычисления был не верный
    sumOfArray += element;
    }
    else {return null} // Если среди элементов есть строка преобразование которой в число невозможно
}
let average = sumOfArray / arrayOfNumbers.length;
return average
}

console.log("Задача 3");
console.log(averageValue(arrayTaskThree));