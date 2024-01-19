let mongoose = require('mongoose');


let AlumnosSchema = new mongoose.Schema({
    PrimerAlumno: String,
    SegundoAlumno: String,
    TercerAlumno: String,
    NumeroRandom: Number
})

module.exports = mongoose.model('Alumnos', AlumnosSchema)