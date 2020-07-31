// par défaut à la soumission d'un formulaire la page se recharge, comment eviter cela ...

const formulaire = document.querySelector("form");
formulaire.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("OK");
    console.log(formulaire)
    formulaire.reset();
});