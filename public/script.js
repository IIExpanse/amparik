var storeImage = document.getElementById("store-image");
var pathImage = document.getElementById("path-image")
var pathText = document.getElementById("path-text")
var maxStoreImages = 5;
var maxPathImages = 5;
var storeCount = 2;
var pathCount = 2;

var pathDescription = [
    "Выйдите на станции метро «Медведково».\nПосле выхода из поезда, поверните направо.",
    "Поднимитесь по эскалатору.\nПосле выхода из метро, поверните налево",
    `Идите прямо до конца улицы, пока не выйдете на Т-образный перекресток.
     Жилой дом, в котором находится наш магазин, можно увидеть ещё при выходе из метро!`,
     "На перекрестке сверните налево и пройдите к торцу дома на углу.",
     `Наш магазин находится чуть дальше вдоль дома, вы узнаете его по вывеске.\nЖдем Вас!`
]

function switchStoreImage(val) {
    storeCount += val;

    if (storeCount == 0) {
        storeCount = maxStoreImages;

    } else if (storeCount > maxStoreImages) {
        storeCount = 1;
    }
    storeImage.src = "images/store/store" + storeCount + ".jpg";
}

function switchPathImage(val) {
    pathCount += val;

    if (pathCount == 0) {
        pathCount = maxPathImages;

    } else if (pathCount > maxPathImages) {
        pathCount = 1;
    }
    pathImage.src = "images/path/path" + pathCount + ".jpg";
    pathText.innerText = pathDescription[pathCount - 1];
}