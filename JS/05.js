let number = prompt("Введите число");

function perfect(_number) {
    let a = 0;
    for (let i = 0; i < _number; i++) {
        if (_number % i == 0) {
            a += i;
        }
    }
    if (_number == a) {
        return console.log("Это число идеально");
    } else {
        return console.log("Это число не идально");
    }
}
perfect(number);