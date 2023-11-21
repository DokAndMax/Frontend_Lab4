"use strict";

const firstElement = document.getElementById("first");
const secondElement = document.querySelector("body :nth-child(2)");

firstElement.addEventListener("click", onClickColorChange);
secondElement.addEventListener("click", onClickColorChange);

let buttons = document.querySelectorAll(".image-control button");

for (let button of buttons) {
    button.addEventListener("click", onClickImageControl);
}

function onClickColorChange(event) {
    this.style.color = getRandomColor();
    this.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function onClickImageControl(event) {
    let image = this.parentElement.previousElementSibling.querySelector(".image");
    const imgStyle = image.style;

    if (image) {
        switch (this.className) {
            case "reveal":
                imgStyle.visibility = "visible";
                break;
            case "zoom-in":
                imgStyle.width = (image.offsetWidth * 1.1) + "px";
                break;
            case "zoom-out":
                imgStyle.width = (image.offsetWidth * 0.9) + "px";
                break;
            case "hide":
                imgStyle.visibility = "hidden";
                break;
        }
    }
}