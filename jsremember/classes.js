class Parent{

}
class Voiture extends parent{
    

    constructor(name,marque){
        this.name = name;
        this.marque = marque;
    }

    affiche(){
        console.log(this.name)
    }
}

const v = new Voiture("Mercedez","Mercedez benz")

console.log(v.affiche());