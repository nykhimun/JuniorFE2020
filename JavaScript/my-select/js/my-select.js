let array = [
    'Побег из Шоушенка', 
    'Зеленая миля',
    'Форрест Гамп', 
    'Список Шиндлера',
    '1+1',
    'Начало',
    'Леон',
    'Король Лев',
    'Бойцовский клуб',
    'Иван Васильевич меняет профессию',
    'Жизнь прекрасна',
    'Достучаться до небес',
    'Крестный отец',
    'Криминальное чтиво',
    'Операция «Ы» и другие приключения Шурика',
    'Престиж',
    'Игры разума',
    'Интерстеллар',
    'Властелин колец: Возвращение Короля',
    'Гладиатор',
    'Назад в будущее',
    'Карты, деньги, два ствола',
    'Матрица',
    'Бриллиантовая рука',
    'Отступники'
]

// const mySelectOptionsDiv = document.querySelector('.my-select-options');
// mySelectOptionsDiv.innerHTML = '';

// for (let i = 0; i < array.length; i++) {
//     mySelectOptionsDiv.innerHTML += `<span class="my-select-option">${array[i]}</span>`;
// }

const mySelectCaretDown = document.querySelector('.my-select-caret-down');
const mySelectCaretUp= document.querySelector('.my-select-caret-up');
const mySelectOptionsDiv = document.querySelector('.my-select-options');

function onClickMySelectCaretDown(event) {
    mySelectCaretDown.style.display = 'none';
    mySelectCaretUp.style.display = 'block';

    mySelectOptionsDiv.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        mySelectOptionsDiv.innerHTML += `<span class="my-select-option">${array[i]}</span>`;
    }
}

function onClickMySelectCaretUp(event) {
    mySelectCaretUp.style.display = 'none';
    mySelectCaretDown.style.display = 'block';

    mySelectOptionsDiv.innerHTML = '';
}