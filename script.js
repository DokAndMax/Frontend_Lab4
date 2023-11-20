"use strict";

const firstElement = document.getElementById("first");
const secondElement = document.querySelector("body :nth-child(2)");


firstElement.addEventListener("click", onClickColorChange);
secondElement.addEventListener("click", onClickColorChange);

function onClickColorChange(event) {
    const targetElement = event.target;
    targetElement.style.color = getRandomColor();
    targetElement.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}