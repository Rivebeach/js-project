// fichier de création des fonctionalités du projet calculatrice (création le 03/08/2020 Alban Agier)

const touches = [...document.querySelectorAll(".bouton")];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector(".ecran");

document.addEventListener("keydown", (event) => {
    const valeur = event.keyCode.toString();
    calculer(valeur);
})
document.addEventListener("click", (event) =>{
    const valeur = event.target.dataset.key;
    calculer(valeur);
})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case "8" :
                ecran.textContent = "";
                break
            case "13" :
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break
            default:
            const indexKeycode = listeKeycode.indexOf(valeur);
            const touche = touches[indexKeycode];
            ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener("error", (event) => {
    alert("Une alerte est survenue : " + event.message);
})
