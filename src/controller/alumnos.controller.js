const axios = require('axios');
const alumnos = require('../databases/models/Alumnos');

let postAlumnos = async (req, res) => {

    const Data = req.body;
    let RandomNumber;

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1',
        headers: { }
    };

    await axios.request(config)
    .then((response) => {
        RandomNumber = response.data;
    })
    .catch((error) => {
        res.status(404).json({errors:[{message: error}]});
        return;
    });

    let NewInsertAlumno = new alumnos({ 
        PrimerAlumno: Data.PrimerAlumno,
        SegundoAlumno: Data.SegundoAlumno,
        TercerAlumno: Data.TercerAlumno,
        NumeroRandom: RandomNumber[0]
    });

    await NewInsertAlumno.save();

    res.status(200).json(NewInsertAlumno);

    return;
}

module.exports = {
    postAlumnos
}