// affiche un élément lorsque le visiteur sort de la fenêtre avec le curseur de sa souri

const kdo = document.querySelector("h1");
addEventListener("mouseout", function(){
    kdo.style.display = "block";
});