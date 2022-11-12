"use strict"

//Перепишите функцию, используя оператор '?' или '||'

function checkAge(age) {
    return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge(age) {
    return age >18 == true || confirm ("Родители разрешили?");
}

//Функция pow(x,n)

function pow(x, n) {
    let result = x;
    for (i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

//Перепишите с использованием функции-стрелки
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask = (
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);


//Сортировать в порядке по убыванию

a
let arr = [5, 2, 1, -10, 8];
arr.sort((b, a) => a - b);
alert( arr ); 

b
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => a - b); 
arr.reverse();
alert(arr);

//Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); 


//Трансформировать в объекты
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

alert( usersMapped[0].id );
alert( usersMapped[0].fullName ); 

//Получить средний возраст

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [ vasya, petya, masha ];
alert( getAverageAge(arr) ); 
