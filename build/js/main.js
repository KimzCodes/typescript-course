"use strict";
//assertion sometimes we have the knowledge to determine the type of value and ts cant
const createElement = (a, b, c) => {
    if (c) {
        return "${a} + ${b} + ${c}";
    }
    return a + b;
};
const myElement = createElement(1, 2, 3);
//but be carful we can do it wrong as below, so its your responsibility
const myElementTwo = createElement(1, 2, 3);
///with dom
const queryImg = document.querySelector("img");
const getImgById = document.getElementById("#img");
//now try queryImg.src it will show error or we must use optional chain
//so we will use as htmlImageElement
//another not there is something call not null assertion
