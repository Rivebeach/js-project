// execute une action à toute les x (interval donné)

const titre = document.querySelector("h1");
let i = 3;
titre.addEventListener("click", function(){
    const compte = setInterval(function(){
        if (i > 0){
            titre.textContent = i;
        }
        else {
            titre.textContent = "IGNITION !!!"
            document.body.style.background = "#FB1";
            clearInterval(compte);
        }
        console.log(i);
        i--;
    }, 1000);
})