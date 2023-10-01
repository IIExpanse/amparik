var storeImage = document.getElementById("store-image");
var pathImage = document.getElementById("path-image")
var maxStoreImages = 5;
var maxPathImages = 5;
var storeCount = 2;
var pathCount = 2;

var pathGuidance = [

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
}