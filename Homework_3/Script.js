//task 1 

for (let a = 1; a <= 50; a++) console.log(a);
for (let b = 35; b >= 8; b--) console.log(b);

//task 2

let c = 89;

while (c >= 11) {
    document.write(`${c} <br/>`);
    c--;
}

//task 3

let d = 100;
let sum = 0;

for (let a = 0; a <= d; a++) {
    sum += a;
}

console.log(sum);

//task 4

let num = 5;
let summ = 0;

for (let a = 0; a <= num; a++) {
    summ = 0;

    for (let b = 1; b <= a; b++) {
        summ += b;
    }

    console.log('Sum ' + a + ' = ' + summ);
}

//task 5

let a = 8;

while (a <= 56) {
    a++;
    if (a % 2 == 1) continue;

    console.log(a);
}

for (let a = 8; a <= 56; a++) {
    if (a % 2 == 1) continue;

    console.log(a);
}

//task 6

let n = 10;
let s = 0;

for (let a = 2; a <= n; a++) {
    s = 0;
    for (let b = 2; b <= 9; b++) {
        s = a * b;

        console.log(+ a + '*' + b + ' = ' +s);
    } 
}

//task 7

let numm = 0;

for (let n = 1000; n > 50; numm++) {
    n = n / 2;
    console.log(n);
}

console.log(numm);

//task 8

let summa = 0;
let msum = 0;
let counter = 0;

while(true) {
    let value = +prompt('Введите число', '');
    counter++;
    if ('') {alert('Ошибка ввода данных!')}
    if (!value) break;
    
    summa += value;
    msum = summa / counter;

}

console.log('Сумма:' + summa);
console.log('Среднее арифметическое число:' + msum);

//task 9

let string = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57 " + "n";
let min, max;

let numb = '';
for (let a = 0; ; a++) {
    if (!string[a]) break;

    if (string[a] != ' ') {
        numb += string[a];
    } else {
        if (min == undefined || max == undefined) {
            min = numb;
            max = numb;
        } else {
            if (min > numb) min = numb;
            if (max < numb) max = numb;
        }

        numb = '';
    }
}

console.log(min, max);

//task 10

let randomNum = prompt("Ввести число", '');
let strNum = String(randomNum);
let strCounter = 0;
let strSum = 0;
let nRevers;

for (let a = 0; a < strNum.length; a++) {
    console.log(strNum[a]);

    strCounter += a;
    strSum += +strNum[a];

    if (nRevers === undefined) nRevers = '';
    nRevers += strNum[strNum.length - 1 - a];
    nRevers = +nRevers;

}
console.log('Количество цифр:' + strCounter + '; Сумма цифр:' + strSum + 'Обратное число:' + nRevers);