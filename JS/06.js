let start = prompt("Введите старт диапазона");

let end = prompt("Введите конец диапазона");

function Range(_start, _end) {
    for (let i = _start; i < _end; i++) {
        let a = 0;
        for (let j = 0; j < i; j++) {
            if (i % j == 0) {
                a += j;
            }

        }
        if (i == a) {
            console.log(i);
        }
    }

};

Range(start, end);