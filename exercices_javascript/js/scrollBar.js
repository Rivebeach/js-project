// affiche en haut de page, une barre de défilement associée au pourcentage de scroll sur la page

const bar = document.querySelector(".bar");
addEventListener("scroll", function(){
    const max = document.body.scrollHeight - innerHeight;
    const pourcentage = pageYOffset / max * 100;
    bar.style.width = pourcentage + "%";

    /* console.log(`
        La taille de la page en pixels est de : ${document.body.scrollHeight}
        La taille de l'affichage en pixels est : ${innerHeight}
        La position du scroll vertical en pixels est de : ${pageYOffset}
    `); */
    
})