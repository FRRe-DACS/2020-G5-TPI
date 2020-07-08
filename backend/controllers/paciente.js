// Cargamos el modelo recien creado //
//cargamos el modelo de hospital para hacer la relacion 1 a n
// const hospitalModel = require('../models/hospital');

const pacienteModel = require('../models/paciente');
const medicoModel = require('../models/medico');

// Codificamos las operaciones que se podran realizar con relacion a los usuarios
module.exports = {
    create: function (req, res, next) {

        pacienteModel.create ({
                nombre:req.body.nombre,
                apellido:req.body.nombre,
                dni:req.body.dni,
                //Direccion y localidad donde reside
                direccion:req.body.direccion,
                localidad:req.body.localidad,
                genero:req.body.genero,
                fechanacimiento:req.body.fechanacimiento,
                telefono:req.body.telefono,
                email:req.body.email,
                //Historiaclinica
                //similar al test y cuando el paciente da positivo se va agregar a esta historia clinica tambien las enfermedades que tuvo el paciente
                Habitofisiologico:req.body.Habitofisiologico , //mecanismos de succion,movimientos corporales deglucion y respiracion nasal
                Habitotoxico: req.body.Habitotoxico ,// fumar /beber alcohol
                Enfermedadesprevia:req.body.Enfermedadesprevia, //asma bronquiolitis
                Fechaultimoasiento:req.body.Fechaultimoasiento,
                //Datosfisicogit
                Peso:req.body.Peso,
                Altura:req.body.Altura,
                Edad:req.body.Edad,
            },
            function (err, result) {
                if (err)
                    next(err);
                else
                    res.json({status: "Ok", message: "Paciente agregado exitosamente!!!", data: result });

            });
    },

   asigMedico: async function(req,res) {
        // crear paciente para el medico
        const pacienteN = new pacienteModel(req.body)
        //buscar el medico para asignar un paciente
        const medico = await medicoModel.findById(req.params)
        //asignar el medico como el que realiza el seguimiento del paciente
        pacienteN.medicos =medico
        //guardamos el paciente para medico
        await pacienteN.save()
        //asignar el paciente dentro del array de medicos del medico
        medico.pacientes.push(pacienteN)
        //guardar el paciente
        await medico.save();
        //enviar al medico el paciente
        res.send(pacienteN)
    },


    getById: function (req, res, next) {
        console.log(req.body);
        pacienteModel.findById(req.params.Id, function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json({status: "success", message: "Paciente found!!!", data: {medico:result}});
            }
        });
    },
//Metodo para retornar todos los medicos registrados en la base de datos
    getAll: function (req, res, next) {
        let pacienteList = [];
        pacienteModel.find({}, function (err, paciente) {
            if (err) {
                next(err);
            } else {
                for (let pacient of paciente) {
                    pacienteList.push({id: pacient._id,
                        nombre:pacient.nombre,
                        apellido:pacient.nombre,
                        dni:pacient.dni,
                        //Direccion y localidad donde reside
                        direccion:pacient.direccion,
                        localidad:pacient.localidad,
                        genero:pacient.genero,
                        fechanacimiento:pacient.fechanacimiento,
                        telefono:pacient.telefono,
                        email:pacient.email,
                        Habitofisiologico:pacient.Habitofisiologico ,
                        Habitotoxico: pacient.Habitotoxico ,
                        Enfermedadesprevia:pacient.Enfermedadesprevia,
                        Fechaultimoasiento:pacient.Fechaultimoasiento,
                        //Datosfisicogit
                        Peso:pacient.Peso,
                        Altura:pacient.Altura,
                        Edad:pacient.Edad,
                        tests:pacient.tests });
                }
                res.json({status: "success", message: "Paciente list found!!!", data: {paciente: pacienteList}});

            }
        });
    },
//Metodo para actualizar algun registro de la base de datos por ID
    updateById: (req, res) => {
        // Recogemos un parámetro por la url
        var pacienteId = req.params.id;

        // Recogemos los datos que nos llegen en el body de la petición
        var update = req.body;

        // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado
        pacienteModel.findByIdAndUpdate(pacienteId, update, {new:true}, (err, pacienteUpdated) => {
            if(err) return res.status(500).send({message: 'Error en el servidor'});

            if(pacienteUpdated){
                return res.status(200).send({
                    nota: pacienteUpdated
                });
            }else{
                return res.status(404).send({
                    message: 'No existe el paciente'
                });
            }

        });
    },
//Metodo para eliminar algun registro de la base de datos por ID

    deleteById: (req, res) => {
        var pacienteId = req.params.Id;
        // Buscamos por ID, eliminamos el objeto y devolvemos el objeto borrado en un JSON
        pacienteModel.findByIdAndRemove(pacienteId, (err, pacienteRemoved) => {
            if(err) return res.status(500).send({ message: 'Error en el servidor' });
            if(pacienteRemoved){
                return res.status(200).send({
                    nota: pacienteRemoved
                });
            }else{
                return res.status(404).send({
                    message: 'No existe el paciente'
                });
            }

        });
    },



}