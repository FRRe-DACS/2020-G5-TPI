'use strict'

const mongoose = require('mongoose'); //mongoose mediador entre la base de datos y nuestro backend


const historiacliSchema = new mongoose.Schema({

    Habitofisiologico:String ,
    Habitotoxico: String ,
    Enfermedadesprevia:{type:String ,required: true},
    Fechaultimoasiento:{type:String ,required:true},
    Datosfisico:{type:String ,required:true},

}) ;

const Historiacli = mongoose.model('Historiacli', historiacliSchema);

module.exports = Historiacli;