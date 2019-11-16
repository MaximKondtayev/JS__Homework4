let numberOne = prompt("Введите первое число");

let numberTwo = prompt("Введите второе число");

function comparison(_numberOne, _numberTwo) {
    if (_numberOne < _numberTwo) {
        return -1;
    }
    if (_numberOne > _numberTwo) {
        return 1;
    }
    if (_numberOne == _numberTwo) {
        return 0;
    }
}

alert(comparison(numberOne, numberTwo));

