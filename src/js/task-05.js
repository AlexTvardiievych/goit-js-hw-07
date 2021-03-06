/*Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>*/

const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

function onChangeText() {
    if (inputName.value.trim() !== '') {
        outputName.textContent = inputName.value;
    }
    else {
        outputName.textContent = 'незнакомец';
    }
}

inputName.addEventListener("input", onChangeText);