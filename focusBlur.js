// action sur un input avec "focus" et "blur" : colorise l'input

const input = document.querySelector("input");
input.addEventListener("focus", function(){
    input.style.background = "#C0FFEE";
})
input.addEventListener("blur", function(){
    input.style.background = "#FFFFFF"
})