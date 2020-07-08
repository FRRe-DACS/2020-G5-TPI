// Cargamos el módulo de mongoose
const mongoose = require('mongoose');
// Cargamos el módulo de bcrypt
//const bcrypt = require('bcrypt');
// Definimos el factor de costo, el cual controla cuánto tiempo se necesita para calcular un solo hash de BCrypt. Cuanto mayor sea el factor de costo, más rondas de hash se realizan. Cuanto más tiempo sea necesario, más difícil será romper el hash con fuerza bruta.
//const saltRounds = 10;
//Definimos los esquemas
const Schema = mongoose.Schema;

// Creamos el objeto del esquema con sus correspondientes campos
  const  PacienteSchema = new Schema({

    nombre:{type:String,
        maxLength: 32,
        minLength:1,
        required: true,
        unique:true,     },
    apellido:{type:String,
      maxLength: 32,
      minLength:1,
      required: true,
           },
    dni:{
      type: Number,
      maximum: 2147482647,
      minimumIntegerDigits: -23323323,
      unique:true,},
    //Direccion y localidad donde reside
    direccion:{
      type: String,
      maxLength: 300,
                },
    localidad:{
      type: String,
      maxLength: 300,

    },
    genero:{
      type: String,
      maxLength: 300,

    },
    fechanacimiento:String,
    telefono:{
      type: Number,
      maximum: 2147482647,
      minimumIntegerDigits: -23323323,
      unique:true,
    },
    email:{
      type: String,
      maxLength: 300,
      unique:true,
    },
    //Historiaclinica
    //similar al test y cuando el paciente da positivo se va agregar a esta historia clinica tambien las enfermedades que tuvo el paciente
    Habitofisiologico:{
      type: String,
      maxLength: 300,

    },
    Habitotoxico:{
      type: String,
      maxLength: 300,

    },
    Enfermedadesprevia:{type:String ,required: true,},
    Fechaultimoasiento:{type:String ,},
    //Datosfisicogit
    Peso:{
      type: String,
      maxLength: 300,

    },
    Altura:{
      type: String,
      maxLength: 300,

    },
    Edad:{
      type: Number,
      maximum: 2147482647,
      minimumIntegerDigits: -23323323,
    },
    tests:[{ type: Schema.Types.ObjectId,
      ref: 'Test'
    }],
    medicos :{
      type: Schema.Types.ObjectID,
      ref: 'Medico'
    },
    });


// Exportamos el modelo para usarlo en otros ficheros
const Paciente = mongoose.model('Paciente', PacienteSchema);


module.exports = Paciente;