'use strict'

const mongoose = require('mongoose'); //mongoose mediador entre la base de datos y nuestro backend


const testSchema = new mongoose.Schema({
    Fechaprimeros_sintomas:String ,
    Fechaconsulta: String ,
    Sintomas: String ,
    Tipodemuestra: String ,
    Resultado: String ,
    Riesgo: Boolean ,

}) ;

const Test = mongoose.model('Test', testSchema);

module.exports = Test;