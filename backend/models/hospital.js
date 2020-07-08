'use strict'
// Cargamos el módulo de mongoose
const mongoose = require('mongoose');
// Cargamos el módulo de bcrypt
//Definimos los esquemas
const Schema = mongoose.Schema;
// Creamos el objeto del esquema con sus correspondientes campos
const hospitalSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
        required: true,
    },
    provincia: {
        type: String,
        required: true
    },
    localidad: {
        type: String,
        trim: true,
        required: true
    },
    direccion: {
        type: String,
        trim: true,
        required: true
    },
    telefono: {
        type: Number,
        trim: true,
        required: false
    },
    ApyNomDirector: {
        type: String,
        trim: true,
        required: true
    },
    capMaxPaciente: {
        type: Number,
        trim: true,
        required: true
    },
    medicos:[{ type: Schema.Types.ObjectId,
        ref: 'Medico'

    }],
    recursos:[{ type: Schema.Types.ObjectId,
        ref: 'Recurso'
    }],
    personalAdms:[{ type: Schema.Types.ObjectId,
        ref: 'PersonalAdm'
    }]
      
});


const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;
