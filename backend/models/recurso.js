'use strict'

const mongoose = require('mongoose'); //mongoose mediador entre la base de datos y nuestro backend
const Schema = mongoose.Schema;


const recursoSchema = new Schema({
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
    estado:{type:String },
    cantidad: {
        type: Number,
        maximum: 2147482647,
        minimumIntegerDigits: -23323323,
    },
    hospitales :{
        type: Schema.Types.ObjectID,
        ref: 'Hospital'
    }
}) ;

const Recurso = mongoose.model('Recurso', recursoSchema);

module.exports = Recurso;
