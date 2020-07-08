
// Cargamos el módulo de mongoose
const mongoose = require('mongoose');
// Cargamos el módulo de bcrypt
const bcrypt = require('bcrypt');
// Definimos el factor de costo, el cual controla cuánto tiempo se necesita para calcular un solo hash de BCrypt. Cuanto mayor sea el factor de costo, más rondas de hash se realizan. Cuanto más tiempo sea necesario, más difícil será romper el hash con fuerza bruta.
const saltRounds = 10;
//Definimos los esquemas
const Schema = mongoose.Schema;
// Creamos el objeto del esquema con sus correspondientes campos
const MedicoSchema = new Schema({
	matricula: {
		type: Number,
		trim: true,
		required: true,
	},
	apynombre: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	especialidad: {
		type: String,
		trim: true,
		required: false
	},
	experiencia: {
		type: String,
		trim: true,
		required: false
	},
	telefono: {
		type: Number,
		trim: true,
		required: true
	},
	cantpac: {
		type: Number,
		trim: true,
		required: true
	},
	email: {
		type: String,

	},
	hospitals :{
		type: Schema.Types.ObjectID,
		ref: 'Hospital'
	},
	pacientes:[{ type: Schema.Types.ObjectId,
		ref: 'Paciente'	}]
		});
// Antes de almacenar la contraseña en la base de datos la encriptamos con Bcrypt, esto es posible gracias al middleware de mongoose
MedicoSchema.pre('save', function(next){
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
	MedicoSchema.methods.isCorrectPassword =function(password, callback){
		bcrypt.compare(password, this.password, function(err, same){
			if(err){
				callback(err);
			}else {
				callback(err,same);
			}
		});
	}
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Medico', MedicoSchema);