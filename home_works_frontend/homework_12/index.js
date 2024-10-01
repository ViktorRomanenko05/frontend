/*
Задание:

необходимо создать функцию с названием "arrayProcessor", которая будет принимать два параметра: первый параметр - массив,
второй параметр - функция callback.

Требования:

1). Функция "arrayProcessor" должна выполнять 3 действия:
- преобразовать каждый элемент в переданном массиве в строку - результат должен сохраняться в новом массиве
(то есть не мутировать входной массив);
- вызывать функцию, которая была передана в параметрах
(функция callback будет принимать в качестве параметра преобразованный на первом шаге массив);
- возвращать то, что вернула функция callback после её вызова.

2). Чтобы показать пример использования функции arrayProcessor вам нужно:
создать ещё две функции (требования к функциям см. в пункте 3),
вызвать arrayProcessor с каждой из функций по очереди
и каждый из 2-х результатов вывести в консоль.

3). Требования к функциям callback:
первая функция должна преобразовывать каждый элемент массива в верхний регистр и возвращать новый массив с преобразованными элементами;
вторая функция должна возвращать сумму длин всех строк.
*/

const arrayOfData = [1, null, NaN, 7, 61.7, true, "", undefined, false, 0, "Hell0"]; //Создаём массив с набором различных данных

const arrayProcessor = (inputArray, callbackAssistant) => {
    const arrayOfStrings = []; //Не мутируя исходный массив
    for (let element of inputArray){
        let toStringElement = String(element); // Действие 1. Преобразуем каждый элемент исходного массива в строку
        arrayOfStrings.push(toStringElement);   // и сихраняем в новый массив
    }
    let result = callbackAssistant(arrayOfStrings); // Действие 2 - вызываем функцию, которая была передана в параметрах
    return result; // Действие 3. Возвращаем то, что вернула функция callback. Через переменную "result" для лучшей читаемости.
}

const upOfCase = (inputArray) => {
    const arrayOfUpCases = [];
    for (let element of inputArray){
        let result = element.toUpperCase(); // Преобразуем каждый элемент в верхний пегистр
        arrayOfUpCases.push(result);
    }
    return arrayOfUpCases; // Возвращаем новый массив с преобразованными элементами
}

const lengthOfStrings = (inputArray) => {
    let totalLength = 0;
    for (let element of inputArray){
        totalLength += element.length; // Суммируем суммы длин всех строк
    }
    return totalLength; // Возвращаем сумму длин всех строк
}//Также есть вариант соединить все строки в одну и вернуть .length. 

console.log(arrayProcessor(arrayOfData, upOfCase)); // Выводим в консоль результат преобразования строк в массиве в верхний регистр
console.log("Total length:", arrayProcessor(arrayOfData, lengthOfStrings)); // Выводим в консоль сумму длин всех строк в массиве