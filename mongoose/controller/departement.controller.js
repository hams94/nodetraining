const departementModel = require('../models/Departement');

const create = async (req, res) => {
    const dep = await departementModel.create(req.body);
    res.send(dep)
}

const getAll = async (req, res) => {
    try {
        const deps = await departementModel.find();
        res.send(deps)
    } catch (error) {
        res.status(500).send('error occured')
        console.log(error)
    }

}

module.exports = {
    create,
    getAll
}