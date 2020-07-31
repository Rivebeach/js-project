// création d'une animation : le titre h1 rebondit au sein de sa div

const titre = document.querySelector("h1");
const cadre = document.querySelector("div");
const maxHeight = cadre.clientHeight;
const maxWidth = cadre.clientWidth;

titre.style.position = "relative";

let topPos = 0;
let leftPos = 0;
let forceH = -2;
let forceW = -2;

function animation() {
    if (topPos == 0) {forceH *= -1}
    else if (topPos == maxHeight - titre.offsetHeight) {forceH *= -1}
    if (leftPos == 0) {forceW *= -1}
    else if (leftPos == maxWidth - titre.offsetWidth) {forceW *= -1}
    topPos += forceH;
    leftPos += forceW;
    titre.style.top = topPos + "px";
    titre.style.left = leftPos + "px";
    requestAnimationFrame(animation);
}

requestAnimationFrame(animation);