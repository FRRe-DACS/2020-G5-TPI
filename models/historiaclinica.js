'use strict'

const mongoose = require('mongoose'); //mongoose mediador entre la base de datos y nuestro backend


const historiacliSchema = new mongoose.Schema({
    nrohistoriacli: Number ,
    Habitofisiologico:String ,
    Habitotoxico: String ,
    Enfermedadesprevia: String ,
    Fechaultimoasiento: String ,
    Datosfisico: Boolean ,

}) ;

const Historiacli = mongoose.model('Historiacli', historiacliSchema);

module.exports = Historiacli;