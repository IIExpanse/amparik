var storeImage = document.getElementById("store-image");
var maxImagesCount = 5;
var curCount = 2;

function switchImage(val) {
    curCount += val;

    if (curCount == 0) {
        curCount = maxImagesCount;

    } else if (curCount > maxImagesCount) {
        curCount = 1;
    }
    storeImage.src = "images/store/store" + curCount + ".jpg";
}