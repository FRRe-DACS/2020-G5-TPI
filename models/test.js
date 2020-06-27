'use strict'

const mongoose = require('mongoose'); //mongoose mediador entre la base de datos y nuestro backend


const testSchema = new mongoose.Schema({
    Fech_1eros_sintoms:{
        type: Date,
        trim: true,
        required: true,

    },
    Fech_consult: {
        type: Date,
        trim: true,
        required: true,
    } ,
    Sintomas: {
        type: String,
        trim: true,
        required: true,
    } ,
    Tipodemuestra: {
        type: String,
        trim: true,
        required: true,
    },
    Resultado: {
        type: String,
        trim: true,
        required: true,
    } ,
    Riesgo: Boolean ,

}) ;

const Test = mongoose.model('Test', testSchema);

module.exports = Test;




