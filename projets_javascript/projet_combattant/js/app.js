
class combattant
{
    constructor(nom,poids,classe)
    {
        this.nom = nom;
        this.poids = poids;
        this.classe = classe;
        console.log(`Combattant ${nom} créé !`);
        console.log(`Je suis le combattant ${this.nom},je pèse ${this.poids} kilos et je joue la classe ${classe} !`);
    }
}

let combattant_01 = new combattant("Escort",150,"Paladin");

