'use strict'

const mongoose = require('mongoose'); //mongoose mediador entre la base de datos y nuestro backend


const testSchema = new mongoose.Schema({
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




