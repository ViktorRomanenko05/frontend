// Примеры явного и неявного преобразования типов данных в JavaScript

// 1. Преобразование строки в число (Явное)

let strOne = "42";
let numOne = Number(strOne);
console.log("Пример 1");
console.log(numOne); //Cтрока преобразована в число c помощью функции Number()

// 2. Преобразование строки в число (Неявное)

 let strTwo = "42";
 let numTwo = +strTwo;
 console.log("Пример 2");
 console.log(numTwo); //Строка преобразована в число с помощью унарного оператора "+" при присвоении значения переменной num2

// 3. Преобразование числа в строку (Явное)
let numThree = 123;
let strThree = String(numThree);
console.log("Пример 3");
console.log(strThree); //Число преобразовано в строку с помощью Функции String()

// 4. Преобразование числа в строку (Неявное)
let numFour = 123;
let strFour = numFour + "";
console.log("Пример 4");
console.log(strFour); //Число преобразовано в строку из-за необходимости конкатенации с пустой строкой

// 5. Преобразование логического значения в строку (Явное)
let isTrueFive = true;
let strFive = String(isTrueFive);
console.log("Пример 5");
console.log(strFive); //Значение логической переменной явно преобразовано в строку с помощью функции String()

// 6. Преобразование логического значения в строку (Неявное)
let isTrueSix = true;
let strSix = isTrueSix + "";
console.log("Пример 6");
console.log(strSix); //Значение логической переменной преобразовано в строку из-за необходимости конкатенации

// 7. Преобразование массива в строку (Явное)
let arrSeven = [1, 2,   3];
let strSeven = String(arrSeven);
console.log("Пример 7");
console.log(strSeven); //Значения массива преобразованы в строку (делимитер ",")

// 8. Преобразование массива в строку (Неявное)
 let arrEight = [1, 2, 3];
 let strEight = arrEight + "";
 console.log("Пример 8");
 console.log(strEight); //Значения массива преобразованы в строку при необходимости конкатенации с пустой строкой

// 9. Преобразование undefined в строку (Явное)
let valueNine;
let strNine = String(valueNine).toUpperCase();
console.log("Пример 9");
console.log(strNine); //Значение и тип данных переменной не определены
                  //поэтому при преобразовании в строку получаем просто слово "undefined"
                  //для наглядности и уверенности, что это именно строка - добавил .toUppercase()

// 10. Преобразование undefined в строку (Неявное)
let valueTen;
let strTen = valueTen + "";
console.log("Пример 10");
console.log(strTen); //При необходимости конкатенации со строкой получаем строку "undefined"

// 11. Преобразование объекта в строку (Явное)
let objElleven = { a: 1 };
let strElleven = String(objElleven); //Преобразуем объект в стандартную строку, указывающую на тип данных
                                     //но не отображающую содержимого объекта.
let strEllevenNew = JSON.stringify(objElleven);//Этот способ выведет содержимое объекта на экран
console.log("Пример 11");
console.log(strElleven); 
console.log(strEllevenNew);

// 12. Преобразование объекта в строку (Неявное)
let objTwelve = { a: 1 };
let strTwelve = objTwelve + "";
console.log("Пример 12");
console.log(strTwelve); //Получим строку с указанием типа данных - [object Object]

// 13. Преобразование логического значения в число (Явное)
let isTrueThreeteen = true;
let numThreeteen = Number(isTrueThreeteen);
console.log("Пример 13");
console.log(numThreeteen); //Получаем число 1. Логично предположить, что при преобразовании
                           //значения false - получим 0.

// 14. Преобразование логического значения в число (Неявное)
let isTrueFourteen = true;
let numFourteen = +isTrueFourteen;
console.log("Пример 14");
console.log(numFourteen); //true = 1 в JS

// 15. Преобразование числа в логическое значение (Явное)
let numFifteen = 1;
let isTrueFifteen = Boolean(numFifteen);
console.log("Пример 15");
console.log(isTrueFifteen); //Если значение отлично от 0 - получаеи true

// 16. Преобразование числа в логическое значение (Неявное)
let numSixteen = 1;
let isTrueSixteen = !numSixteen;
console.log("Пример 16");
console.log(isTrueSixteen); //1 - отлична от 0, значит true, применяем 2 отрицания - получаем то же значение true

// 17. Преобразование null в строку (Явное)
let valueSeventeen = null;
let strSeventeen = String(valueSeventeen);
console.log("Пример 17");
console.log(strSeventeen); //Получаем строку "null"

// 18. Преобразование null в строку (Неявное)
let valueEighteen = null;
let strEighteen = valueEighteen + "";
console.log("Пример 18");
console.log(strEighteen); //преобразуем значение в строку путем сложения с пустой строкой

// 19. Преобразование NaN в строку (Явное)
let valueNineteen = NaN;
let strNineteen = String(valueNineteen);
console.log("Пример 19");
console.log(strNineteen); //Получаем строку "NaN" путем явного преобразования

// 20. Преобразование NaN в строку (Неявное)
let valueTwenty = NaN;
let strTwenty = valueTwenty + "";
console.log("Пример 20");
console.log(strTwenty); //Получаем строку "NaN" путем конкатенации с пустой строкой


// ДОМАШНЕЕ ЗАДАНИЕ
// Задание 1

/* to string */
console.log('17 to string is ' + String(17));                // '17'
console.log('-17.17 to string is ' + String(-17.17));        // '-17.17'
console.log('false to string is ' + String(false));          // 'false'
console.log('null to string is ' + String(null));            // 'null'
console.log('undefined to string is ' + String(undefined));  // 'undefined'
console.log('0 to string is ' + String(0));                  // '0'

/* to number */
console.log("'17' to number is " + Number('17'));            // 17
console.log('true to number is ' + Number(true));            // 1
console.log('false to number is ' + Number(false));          // 0
console.log('null to number is ' + Number(null));            // 0
console.log('undefined to number is ' + Number(undefined));  // NaN
console.log("'   20   ' to number is " + Number('   20   '));// 20
console.log("'      ' to number is " + Number('      '));    // 0
console.log("'   30d   ' to number is " + Number('   30d   '));// NaN

/* to boolean */
console.log('null to boolean is ' + Boolean(null));          // false
console.log('undefined to boolean is ' + Boolean(undefined));// false
console.log('0 to boolean is ' + Boolean(0));                // false
console.log('-0 to boolean is ' + Boolean(-0));              // false
console.log('NaN to boolean is ' + Boolean(NaN));            // false
console.log("'' to boolean is " + Boolean(''));              // false
console.log("' ' to boolean is " + Boolean(' '));            // true
console.log('17 to boolean is ' + Boolean(17));              // true
console.log("'Hello' to boolean is " + Boolean('Hello'));    // true

//Задание 2
const a = 17;
const b = 5;

console.log(a > b);              // true
console.log(a <= b);             // false
console.log(a == b);             // false
console.log(a != b);             // true

console.log('a' < 'b');          // true
console.log('ab' > 'a');         // true

console.log('17' > 1);           // true (строка '17' будет преобразована в число 17)

console.log(17 === 1);           // false
console.log(17 === 17);          // true
console.log(17 === '17');        // false (строгое сравнение, разные типы данных)
console.log(17 === true);        // false
console.log('0' === '');         // false
console.log(true === false);     // false
console.log(true === true);      // true 
console.log(null === undefined); // false 
console.log(false === 0);        // false

console.log(17 == '17');         // true (нестрогое сравнение)
console.log('0' == '');          // false
console.log(0 == '');            // true (нестрогое сравнение, пустая строка приводится к 0)
console.log(null == undefined);  // true (нестрогое сравнение, null и undefined считаются равными)
console.log(false == 0);         // true (нестрогое сравнение, false приводится к 0)

console.log(undefined == null);  // true
console.log(undefined == 0);     // false (undefined не 0)
console.log(null == 0);          // false (null - не 0)
console.log(undefined < 0);      // false (undefined при преобразовании в число становится NaN)
console.log(undefined > 0);      // false