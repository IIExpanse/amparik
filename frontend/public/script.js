let storeImage = document.getElementById("store-image");
let pathImage = document.getElementById("path-image")
let pathText = document.getElementById("path-text")
let popUpMod = document.getElementById("wig-popup")
let maxStoreImages = 5;
let maxPathImages = 5;
let storeCount = 1;
let pathCount = 1;

const pathDescription = [
    "Выйдите на станции метро «Медведково».\nПосле выхода из поезда, поверните направо.",
    "Поднимитесь по эскалатору.\nПосле выхода из метро, поверните налево",
    `Идите прямо до конца улицы, пока не выйдете на Т-образный перекресток.
     Жилой дом, в котором находится наш магазин, можно увидеть ещё при выходе из метро!`,
    "На перекрестке сверните налево и пройдите к торцу дома на углу.",
    `Наш магазин находится чуть дальше вдоль дома, вы узнаете его по вывеске.\nЖдем Вас!`
];

const displayedWigs = [];

function switchStoreImage(val) {
    storeCount += val;

    if (storeCount === 0) {
        storeCount = maxStoreImages;

    } else if (storeCount > maxStoreImages) {
        storeCount = 1;
    }
    storeImage.src = "images/store/store" + storeCount + ".jpg";
}

function switchPathData(val) {
    pathCount += val;

    if (pathCount === 0) {
        pathCount = maxPathImages;

    } else if (pathCount > maxPathImages) {
        pathCount = 1;
    }
    pathImage.src = "images/path/path" + pathCount + ".jpg";
    pathText.innerText = pathDescription[pathCount - 1];
}

function disablePopUp() {
    popUpMod.style.display = "none";
}

function enablePopUp(src) {
    popUpMod.firstElementChild.src = src;
    popUpMod.style.display = "block";
}

class WigCard {

    constructor(type, name, article, price, brand, color, available, images) {
        this.type = type;
        this.name = name;
        this.article = article;
        this.price = price;
        this.brand = brand;
        this.color = color;
        this.available = available;
        this.images = images;
    }
}