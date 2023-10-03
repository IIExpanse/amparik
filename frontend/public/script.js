let storeImage = document.getElementById("store-image");
let pathImage = document.getElementById("path-image")
let pathText = document.getElementById("path-text")
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

class WigCard {
    #type;
    #name;
    #article;
    #price;
    #brand;
    #color;
    #available;

    constructor(type, name, article, price, brand, color, available) {
        this.#type = type;
        this.#name = name;
        this.#article = article;
        this.#price = price;
        this.#brand = brand;
        this.#color = color;
        this.#available = available;
        this._type = type;
        this._name = name;
        this._article = article;
        this._price = price;
        this._brand = brand;
        this._color = color;
        this._available = available;
    }


    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get article() {
        return this._article;
    }

    set article(value) {
        this._article = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get brand() {
        return this._brand;
    }

    set brand(value) {
        this._brand = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get available() {
        return this._available;
    }

    set available(value) {
        this._available = value;
    }
}