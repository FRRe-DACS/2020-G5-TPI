'use strict'

const mongoose = require('mongoose'); //mongoose mediador entre la base de datos y nuestro backend


const historiacliSchema = new mongoose.Schema({
//similar al test y cuando el paciente da positivo se va agregar a esta historia clinica tambien las enfermedades que tuvo el paciente
    Habitofisiologico:String ,
    Habitotoxico: String ,
    Enfermedadesprevia:{type:String ,required: true},
    Fechaultimoasiento:{type:String ,required:true},
    //Datosfisicogit
    Peso:Number,
    Altura:Number,
    Edad:String,
    //Historial


});

const Historiacli = mongoose.model('Historiacli', historiacliSchema);

module.exports = Historiacli;