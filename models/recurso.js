'use strict'

const mongoose = require('mongoose'); //mongoose mediador entre la base de datos y nuestro backend


const recursoSchema = new mongoose.Schema({
    nombre:{
        type: String,
        maxLength: 100,
        minLength:1,
        required: true,

    },
    descripcion: {
        type: String,
        maxLength: 300,

    } ,
    estado: {
        type: Boolean,
        required: true,
    } ,
    cantidad: {
        type: Number,
        maximum: 2147482647,
        minimumIntegerDigits: -23323323,
    },
}) ;

const Recurso = mongoose.model('Recurso', recursoSchema);

module.exports = Recurso;
