
let number = +prompt("Введите число");

function factorial(_num) {
    let a = 1;
    for (let i = 1; i <= _num; i++) {
        a *= i;
    }
    return a;
}

alert(factorial(number));