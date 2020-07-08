'use strict'

const mongoose = require('mongoose'); //mongoose mediador entre la base de datos y nuestro backend
const Schema = mongoose.Schema;

const testSchema = new Schema({
    Fechacreacion:Date,
    //Sintomas
    Fecha1erossintomas:{type: Date},
    Sintomas:{type:String},
    Diarrea:Boolean,
    Vomitos:Boolean,
    Dolorgarganta:Boolean,
    Rechazoalimento:Boolean,
    Perdidadelolfato:Boolean,
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
    Personasconcontacto:String,
    Fechainternacion:{type: Date},
    //Critico o estable
    Estado:{String},
    //Condicion Sintomatico/Asintomatico
    Condicion:String,
    Fechaalta:String,
    Fechadedefuncion:Date,
    pacientes :{
        type: Schema.Types.ObjectID,
        ref: 'Paciente'},
 }) ;

const Test = mongoose.model('Test', testSchema);

module.exports = Test;




