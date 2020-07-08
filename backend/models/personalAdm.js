'use strict'

// Cargamos el módulo de mongoose
const mongoose = require('mongoose');
// Cargamos el módulo de bcrypt
const bcrypt = require('bcrypt');
// Definimos el factor de costo, el cual controla cuánto tiempo se necesita para calcular un solo hash de BCrypt. Cuanto mayor sea el factor de costo, más rondas de hash se realizan. Cuanto más tiempo sea necesario, más difícil será romper el hash con fuerza bruta.
const saltRounds = 10;
//Definimos los esquemas
const Schema = mongoose.Schema;
// Creamos el objeto del esquema con sus correspondientes campos
const personalAdmSchema = new Schema({
    apynombre: {
        type: String,
        unique: true,
        required: true,
    },
    telefono: {
        type: Number,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        trim: true,
        required: true,
    },
    consulta: {
        type: String,
        trim: true,
        required: true
    },
    descripcion: {
        type: String,
        trim: true,
        required: false
    }
});
personalAdmSchema.pre('save', function(next){
    if (this.isNew || this.isModified('password')){

        const document = this;
        bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
            if(err){
                next(err);
            }else{
                document.password = hashedPassword;
                next();
            }

        });

    }else {
        next();
    }
});
personalAdmSchema.methods.isCorrectPassword =function(password, callback){
    bcrypt.compare(password, this.password, function(err, same){
        if(err){
            callback(err);
        }else {
            callback(err,same);
        }
    });
}
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('PersonalAdm', personalAdmSchema);
