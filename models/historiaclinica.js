'use strict'

const mongoose = require('mongoose'); //mongoose mediador entre la base de datos y nuestro backend


const historiacliSchema = new mongoose.Schema({
<<<<<<< HEAD

=======
//similar al test y cuando el paciente da positivo se va agregar a esta historia clinica tambien las enfermedades que tuvo el paciente
>>>>>>> 086dd0f2d960565665b7374d986928808126e543
    Habitofisiologico:String ,
    Habitotoxico: String ,
    Enfermedadesprevia:{type:String ,required: true},
    Fechaultimoasiento:{type:String ,required:true},
<<<<<<< HEAD
    Datosfisico:{type:String ,required:true},
=======
    //Datosfisicogit
    Peso:String,
    Altura:String,
    Edad:String,
    //Historial
>>>>>>> 086dd0f2d960565665b7374d986928808126e543


});

const Historiacli = mongoose.model('Historiacli', historiacliSchema);

module.exports = Historiacli;