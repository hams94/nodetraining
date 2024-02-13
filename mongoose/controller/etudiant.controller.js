const Etudiant = require('../models/Etudiant');

const create = async (req, res) => {
    try {
        const etudiant = await Etudiant.create(req.body);
        res.send(etudiant);
    }catch(error){
        res.status(500).send('error occured')
        console.log(error)
    }
}

const getAll = async (req, res) => {
    const etudiants = await Etudiant.find().populate('departement');
    res.send(etudiants);
}

const findById = async (req, res) => {
    const etudiant = await Etudiant.findById(req.params.id)
    res.send(etudiant)
}

module.exports = {
    create,
    getAll,
    findById
}