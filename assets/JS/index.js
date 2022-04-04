"use strict";

const navList = document.querySelector('.nav-list');
const categories = navList.children[1];

const subNavList = document.querySelector('.sub-nav-list');

function linkClick(click, open) {
    categories.classList.add('darkGreen');
    subNavList.classList.add('display');
};

categories.addEventListener('click', linkClick);
