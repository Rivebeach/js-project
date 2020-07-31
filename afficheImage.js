// affiche une image aléatoire : qui se positionne à l'endroit ou on clic
// le code fonctionne mais l'image n'est pas aléatoire : une histoire de cookie ou de cache ?

addEventListener("click", function(event){
    const image = document.createElement("img");
    const size = 100;
    image.setAttribute("src", `http://lorempixel.com/${size}/${size}/`);
    image.style.position = "absolute";
    image.style.top = event.y - size / 2 + "px";
    image.style.left = event.x - size / 2 + "px";
    document.body.appendChild(image);
})