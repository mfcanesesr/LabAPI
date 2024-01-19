const express = require("express");

const AlumnosController = require("../controller/alumnos.controller");

const AlumnosRouter = express.Router();

//Enviar datos de los alumnos
AlumnosRouter.post("/", AlumnosController.postAlumnos);


module.exports = AlumnosRouter;