'use strict'

const mongoose = require('mongoose'); //mongoose mediador entre la base de datos y nuestro backend

const hospitalSchema = new mongoose.Schema({
    nombre:String,
    localidad:String,
    direccion:String,
    telefono:Number,
    ApyNomDirector:String,
    capMaxPaciente:Number,

});


const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;