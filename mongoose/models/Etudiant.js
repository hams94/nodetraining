const mongoose = require('mongoose');
const { Schema } = mongoose

const EtudiantShema = new Schema({
    matricule: { type: String, unique: true, required: true },
    firstname: String,
    lastname: String,
    phone: { type: String, unique: true, required: true },
    age: Number,
    active: Boolean,
    dob: Date,
    status: Number,
    departement: {
        type: mongoose.Types.ObjectId,
        ref: 'Departement'
    }

},
    { timestamps: true }

)

module.exports = mongoose.model('Etudiant', EtudiantShema);