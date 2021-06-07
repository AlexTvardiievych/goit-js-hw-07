/*Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать,
после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.*/


const controls = document.querySelector('#controls');
const firstBox = controls.firstElementChild;
const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

let sizeBox = 30;

function createBoxes(amount) {
    destroyBoxes();
    if (boxes.children.length > 0) {
        sizeBox = parseInt(boxes.lastChild.style.width) + 10;
    }

    let divBoxes = [];
    divBoxes.length = Number(amount);

    const createBoxes = [...divBoxes].map((div) => {
        div = document.createElement('div');
        div.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, 
                                         ${Math.round(Math.random() * 255)}, 
                                         ${Math.round(Math.random() * 255)})`;
        div.style.height = `${sizeBox}px`;
        div.style.width = `${sizeBox}px`;

        divBoxes.push(div);

        sizeBox += 10;
        return div;
    });

    boxes.append(...createBoxes);
}

function destroyBoxes() {
    boxes.innerHTML = '';
    firstBox.value = '';
    sizeBox = 30;
}

render.addEventListener('click', () => {
    createBoxes(firstBox.value)
});

destroy.addEventListener('click', destroyBoxes);