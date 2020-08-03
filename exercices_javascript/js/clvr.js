// capter la chaine de caractéres saisis et la renvoyer sans les voyelles

const texte = document.querySelector("textarea");
const txt = [];
const voyelles = ["a", "e", "i", "o", "u", "y"];

texte.addEventListener("keypress", function(event){
    const key = event.key;
    if (!voyelles.includes(key)){
        txt.push(key);
    }
    console.log(txt.join(""));
});