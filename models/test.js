'use strict'

const mongoose = require('mongoose'); //mongoose mediador entre la base de datos y nuestro backend


const testSchema = new mongoose.Schema({
<<<<<<< HEAD
    Fech_1eros_sintoms:{
        type: String,
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
=======
    Fechacreacion:Date,
    //Sintomas
    Fecha1erossintomas:{type: Date},
    Fiebremayor38grado:{type:String},
    Diarrea:{type:String},
    Vomitos:{type:String},
    Dolorgarganta:{type:String},
    Rechazoalimento:{type:String},
    Perdidadelolfato:{type:String},

    //Enfermedadespreviascomorbilidades/PATOLOGIAS
    Obesidad:Boolean,
    Embarazo:Boolean,
    Hipertensionarterial:Boolean,
    Bronquiolitis:Boolean,
    Asma:Boolean,
    Tuberculosis:Boolean,
    Fumador:Boolean,

    //evaluaciondel medico
>>>>>>> 086dd0f2d960565665b7374d986928808126e543
    Riesgo: Boolean ,
    //Tipodemuestraquesetomo
    Hisopadonasofaringeo: Boolean,
    Hisopadoorofaringe:Boolean,
    Hisopodaonasofaringeo:Boolean,
    Fechatomademuestra:Date,

    //Resultadosyevolucion
    Resultado: Boolean ,
    //Se encarga el personal administrativo de cargar las personas con la que estuvo en contacto
    Datosdelaspersonasconlaqueestuvoencontacto:[],
    Fechainternacion:{type: Date},
    //Critico o estable
    Estado:{String},
    //Condicion Sintomatico/Asintomatico
    Condicion:String,
    Fechaalta:String,
    Fechadedefuncion:String,

 }) ;

const Test = mongoose.model('Test', testSchema);

module.exports = Test;




