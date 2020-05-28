'use strict'

const mongoose = require('mongoose'); //mongoose mediador entre la base de datos y nuestro backend
const personalAdmSchema = new mongoose.Schema({
    apynombre:String,
    telefono:Number,
    consulta:String,
    descripcion:String,

});
const Personaladm = mongoose.model('Personaladm', personalAdmSchema);
module.exports = Personaladm;