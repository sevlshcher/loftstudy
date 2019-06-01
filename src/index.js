/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {

    for (let i = 0; i < array.length; i++) {
        let el = array[i];

        fn(el, i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i], i, array));
    }

    return newArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    var i = initial ? 0 : 1,
        previousValue = initial || array[0];

    for (; i < array.length; i++) {
        previousValue = fn(previousValue, array[i], i, array);
    }

    return previousValue;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */

// Method #1

// function upperProps(obj) {
//     var newArray = [];

//     Object.getOwnPropertyNames(obj).forEach((val, idx, array) => newArray.push(val.toUpperCase()));

//     return newArray;
// }

// Method #2

function upperProps(obj) {
    var newArray = [];
  
    for (var key in obj) {
        newArray.push( key.toUpperCase() );
    }
  
    return newArray;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    
    if (from >= 0) {
        for (let i = from; i <= to; i++) {
            array.push(i);
        }
    } else {
        (from <= 0)
    } 
    {
        for (let i = from; i <= -1; i++) {
            array.push(i);
        }
    }
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return proxy;
};

const target = {};
const handler = {
    set: (target, prop, value) {
        console.log(`Запись ${prop} ${value}`);
        target[prop] = value * value;
        return true;
     }
}

var proxy = new Proxy(

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
