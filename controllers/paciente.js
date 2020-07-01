// Cargamos el modelo recien creado //
//cargamos el modelo de hospital para hacer la relacion 1 a n
// const hospitalModel = require('../models/hospital');

const pacienteModel = require('../models/paciente');

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
            },
            function (err, result) {
                if (err)
                    next(err);
                else
                    res.json({status: "Ok", message: "Medico agregado exitosamente!!!", data: result });

            });
    },
   /*
    asigHospital: async function(req,res) {
        // crear medico para el hospital
        const medicoN = new medicoModel(req.body)
        //buscar el hospital para asignar un medico
        const hospital = await hospitalModel.findById(req.params)
        //asignar el hospital como lugar de trabajo del medico
        medicoN.hospitals =hospital
        //guardamos el medico para hospital
        await medicoN.save()
        //asignar el medico dentro del array de medicos del hospital
        hospital.medicos.push(medicoN)
        //guardar el medico
        await hospital.save();
        //enviar al hospital el medico
        res.send(medicoN)
    },
*/

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
        pacienteModel.find({}, function (err, medico) {
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
                        email:pacient.email});
                }
                res.json({status: "success", message: "Medico list found!!!", data: {medico: medicoList}});

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