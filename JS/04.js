let lenght = +prompt("Введите длину прямоугольника");

let width = +prompt("Введите ширину прямоугольника");

function area(_lenght, _width = _lenght) {
    return _lenght * _width;
}

alert(area(lenght, width));