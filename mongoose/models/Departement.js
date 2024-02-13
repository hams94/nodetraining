const mongoose = require('mongoose');
const { Schema } = mongoose

const DepartementShema = new Schema({
    name: String
});

module.exports = mongoose.model('Departement', DepartementShema)