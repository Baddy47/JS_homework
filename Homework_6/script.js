/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены.*/

let string = 'aaa@bbb@ccc';

console.log(string.replace(/@/gi, '!'));

/*2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.*/

let date = '2025-12-31';
let arrDate = date.split('-').reverse().join('/');
Date.parse(arrDate);
console.log(arrDate);

/*3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).*/

let str = 'Я учу javascript!';

console.log(str.substr(0, 1) + '!');
console.log(str.substring(0, 1) + '!');
console.log(str.slice(0, 1) + '!');

/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/

let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3);
}

console.log(Math.sqrt(sum));

/*5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1.*/

function getDiff(a, b) {
    let c = a - b;
    if (c > 0) return(c)
    else return(c /= c)
}
console.log(getDiff(6, 1));

/*6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014).*/

date = new Date();

function addZero(num) {
    if (num >= 0 && num <=9) return('0' + num);
    else return(num);
}

console.log(addZero(date.getHours()) + ':' + addZero(date.getMinutes() + 1) + ':' + addZero(date.getSeconds()) + ' ' + addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + addZero(date.getFullYear()));

/*7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'.*/

str = 'aa aba abba abbba abca abea';

console.log(str.match(/ab+a/g));

/*8. Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения.*/

function validPhone() {
    let regexp = /^\+\d[\d\(\)\ -]{4,14}\d$/;
    let numPhone = prompt('номер телефона');
    let valid = regexp.test(numPhone);
    return valid;
}

console.log(validPhone());

/*9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов.
Функция должна возвращать true или false. Используйте регулярные
выражения.*/

function validMail() {
    let regexp = /^[\w-\.]{2,15}@[\w-]+\.[a-z]{2,11}$/i;
    let mail = prompt('Электронная почта');
    let valid = regexp.test(mail);
    return valid;
}

console.log(validMail());