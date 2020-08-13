// fichier de création des fonctionalités du projet Tincat (création le 04/08/2020 Alban Agier)

const profils = document.getElementById("profils");
const loader = document.getElementById("loader");
const login = document.getElementById("login");
profils.style.display = "none";
loader.style.display = "none";
let cats;
let printProfil = [];

document.getElementById("formLogin").addEventListener("submit", function(event){
    event.preventDefault()
    login.style.display = "none"
    loader.style.display = "block"
    fetch("http://4graphik.com/lab/tincat/api/cats/")
    .then(res => res.json())
    .then(res => {
        loader.style.display = "none"
        profils.style.display = "block"
        cats = res
        showProfil()
    })
})

document.getElementById("like").addEventListener("click" , function(){
    showProfil()
})

document.getElementById("run").addEventListener("click" , function(){
    showProfil()
})

function showProfil(){
    let randomNumber = Math.floor(Math.random() * cats.length)
    let include = false
    if(printProfil.length < cats.length){
        if(!printProfil.includes(randomNumber)){
            printProfil.push(randomNumber)
            include = true
        }
        else{
            while(printProfil.includes(randomNumber) && include == false) {
                randomNumber = Math.floor(Math.random() * 11)
                if(!printProfil.includes(randomNumber)) {
                    printProfil.push(randomNumber)
                    include = true
                }
            }
        }
    }
    else{
        document.getElementById("card").innerHTML = "<h3>Désolé, il n'y a plus de profils</h3>"
    }
    if(include === true) {
        let div = document.createElement("div")
        div.classList.add("imgProfil")
        div.style.backgroundImage = `url(${cats[randomNumber].path})`
        let h2 = document.createElement("h2")
        h2.innerHTML = cats[randomNumber].name
        document.getElementById("card").innerHTML = ""
        document.getElementById("card").append(div)
        document.getElementById("card").append(h2)
    }
}

