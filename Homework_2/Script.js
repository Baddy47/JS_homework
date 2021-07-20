// Task number 1

let name = prompt('Как тебя зовут?');
let age = prompt('Сколько тебе лет?');
let city = prompt('Где ты проживаешь?');
let phone = prompt('Твой номер телефона.');
let email = prompt('Твой электронный адрес.');
let company = prompt('Название компании где ты работаешь');

console.log (`Меня зовут ${name}. Мне ${age} лет. Я прожтваю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);

// Task number 2

let date = 2020;
let year = date - age;
console.log(`${name} родился в ${year} году`);

// Task number 3

let str = '126126';

(+str[0] + +str[1] + +str[2] == +str[3] + +str[4] + +str[5]) ? console.log('Да!') :
                                                               console.log('Нет!');

//task number 4
                                                                
let a = 0;
(a > 0) ? console.log('Верно!') : console.log('Не верно!');

//task number 5

a = 10;
let b = 2;
let sum = (a+b) + (a-b) + (a*b) + (a/b);
(sum > 1) ? console.log(sum ** 2) : console.log(sum);

//task number 6

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

//task number 7

let n = 0;
if (n <= 15) {
    console.log('Первая четверть часа.');
} else if (n > 15 && n <= 30) {
    console.log('Вторая четверть часа.');
} else if (n > 30 && n <=45) {
    console.log('Третья четверть часа.');
} else if (n > 45 && n <=59) {
    console.log('Четвертая четверть часа.');
} else {
    console.log('Новый час:)');
}

//task number 8

let day = 1;
if (day <= 10) {
    console.log('Первая декада.');
} else if (day > 10 && day <= 20) {
    console.log('Вторая декада.');
} else if (day > 20 && day <=31) {
    console.log('Третья декада.');
}

//task number 9

day = 1;
let yearsDay = day/365;
(day < 365 && yearsDay < 1) ? console.log('Меньше года') : console.log('Ровно год!');
let monthsDay = day/31;
(day < 31 && monthsDay <= 1) ? console.log('Меньше месяца') : console.log('Ровно месяц!');
let weeksDay = day/7;
(day < 7 && weeksDay < 1) ? console.log('Меньше недели') : console.log('Ровно неделя!');
let hoursDay = 24*day;
(day < 1 && hoursDay < 24) ? console.log('Меньше суток') : console.log('Ровно сутки!');
let minutsDay = hoursDay*60;
let secondsDay = minutsDay*60;

//task number 10

day = 1;
if (day <=31) {
    console.log('Месяц Январь');
} else if (day > 31 && day <=59) {
    console.log('Месяц Февраль');
} else if (day > 59 && day <=90) {
    console.log('Месяц Март');
} else if (day > 90 && day <=120) {
    console.log('Месяц Апрель');
} else if (day > 120 && day <=151) {
    console.log('Месяц Май');
} else if (day > 151 && day <=181) {
    console.log('Месяц Июнь');
} else if (day > 181 && day <=212) {
    console.log('Месяц Июль');
} else if (day > 212 && day <=243) {
    console.log('Месяц Август');
} else if (day > 243 && day <=273) {
    console.log('Месяц Сентябрь');
} else if (day > 273 && day <=304) {
    console.log('Месяц Октябрь');
} else if (day > 304 && day <=334) {
    console.log('Месяц Ноябрь');
} else if (day > 334 && day <=365) {
    console.log('Месяц Декабрь');
}