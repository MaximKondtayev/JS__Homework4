let numberOne = prompt("Введите первое число");

let numberTwo = prompt("Введите второе число");

let numberThree = prompt("Введите третее число");

function clay(_numberOne, _numberTwo, _numberThree) {
    let _result;
    _result = _numberOne.toString() + _numberTwo.toString() + _numberThree.toString();
    return _result;
}

alert(clay(numberOne, numberTwo, numberThree));