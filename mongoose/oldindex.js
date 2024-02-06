const mongoose = require('mongoose');
const Etudiant = require('./models/Etudiant')

async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/nodejs')
    console.log("connexion ok");

    Etudiant.events.on('error',(error)=>{
        console.log(error)
    })

    // CREATE

    // const mamdou = new EtudiantModel({
    //     matricule:"A002",
    //     firstname:"Kindi",
    //     lastname:"Baldé",
    //     age:28,
    //     active:true,
    //     dob:"1994-08-01",
    //     phone:"624359354",
    // });
    // const mamdou = EtudiantModel.create({
    //     matricule:"A002",
    //     firstname:"Hams",
    //     lastname:"BAH",
    //     age:28,
    //     active:true,
    //     dob:"1994-08-01",
    //     phone:"624359354",
    // });

    // READ
    // const saved = await mamdou.save();
    // const etudiants = await Etudiant.find()
    // const etudiant = await Etudiant.findById('65c0ebce808745d922597c3e')
    // const etudiant = await Etudiant.findOne({phone:'624359354'})
    // const etudiants = await Etudiant.find().distinct('phone')
    // const etudiants = await Etudiant.find({phone:{ $regex: '/624/', $options : 'i'}}) // to review 
    // const etudiants = await Etudiant.find().select('firstname lastname -_id').sort({firstname:'asc'})
    const etudiants = await Etudiant.find().select('firstname lastname phone').sort('-firstname')
    console.log(etudiants)
    // UPDATE



    mongoose.disconnect();
}

main();