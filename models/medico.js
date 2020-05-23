'use strict'

const mongoose = require('mongoose'); //mongoose mediador entre la base de datos y nuestro backend

const medicoSchema = new mongoose.Schema({ 
	matricula:Number,
	apynombre:String,
 	especialidad:String,
 	experiencia:String,
 	telefono:Number,
 	cantpacs:Number,

});


const Medico = mongoose.model('Medico', medicoSchema);

module.exports = Medico; 