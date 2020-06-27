'use strict'

const mongoose = require('mongoose'); //mongoose mediador entre la base de datos y nuestro backend


const testSchema = new mongoose.Schema({
    //datos personales
    Apynombredeltesteado:{type:string},
    Localidadorigen:{type:sring},
    Localidadinternacion:{type:string},
    Provincia:{type:string},
    Direccion:{type:string},
    //datos primeros sintomas
    Fech_1eros_sintoms:{type: Date,required: true,},
    Fech_consult: {type: Date,trim: true,required: true,} ,
    Sintomas: {type: String,trim: true,required: true,  } ,
    Enfermedadespreviascomorbilidades:{type:string},
    //evaluaciondel medico
    Tipodemuestra: { type: String,trim: true,required: true,},
    Evolucion:{type:string},
    Riesgo: Boolean ,
    Resultado: Boolean ,
    Fechaalta:String,
    Fechadedefuncion:String,
    Datosdelaspersonasconlaqueestuvoencontacto:String,

}) ;

const Test = mongoose.model('Test', testSchema);

module.exports = Test;




