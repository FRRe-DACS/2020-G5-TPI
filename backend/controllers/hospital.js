const hospitalModel = require('../models/hospital');
// const medicoModel = require('../models/medico');

// Codificamos las operaciones que se podran realizar con relacion a los usuarios
module.exports = {
    create: function (req, res, next) {

        hospitalModel.create ({
                nombre: req.body.nombre,
                provincia: req.body.provincia,
                localidad: req.body.localidad,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                ApyNomDirector: req.body.ApyNomDirector,
                capMaxPaciente: req.body.capMaxPaciente


            },
            function (err, result) {
                if (err)
                    next(err);
                else
                    res.json({status: "Ok", message: "Hospital agregado exitosamente!!!", data: result });

            });
    },
    getById: function (req, res, next) {
        console.log(req.body);
        hospitalModel.findById(req.params.Id, function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json({status: "success", message: "Hospital found!!!", data: {hospital:result}});
            }
        });
    },
//Metodo para retornar todos los videojuegos registrados en la base de datos
    getAll: function (req, res, next) {
        let hospitalList = [];
        hospitalModel.find({}, function (err, hospital) {
            if (err) {
                next(err);
            } else {
                for (let hosp of hospital) {
                    hospitalList.push({id: hosp._id,
                        nombre: hosp.nombre,
                        provincia: hosp.provincia,
                        localidad: hosp.localidad,
                        direccion: hosp.direccion,
                        telefono: hosp.telefono,
                        ApyNomDirector: hosp.ApyNomDirector,
                        capMaxPaciente: hosp.capMaxPaciente,
                        medicos: hosp.medicos,
                        recursos: hosp.recursos,
                        personalAdms: hosp.personalAdms
                    });
                }
                res.json({status: "success", message: "Hospital list found!!!", data: {hospital: hospitalList}});

            }
        });
    },
//Metodo para actualizar algun registro de la base de datos por ID
    updateById: (req, res) => {
        // Recogemos un parámetro por la url
        var hospitalId = req.params.Id;

        // Recogemos los datos que nos llegen en el body de la petición
        var update = req.body;

        // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado
        hospitalModel.findByIdAndUpdate(hospitalId, update, {new:true}, (err, hospitalUpdated) => {
            if(err) return res.status(500).send({message: 'Error en el servidor'});

            if(hospitalUpdated){
                return res.status(200).send({
                    nota: hospitalUpdated
                });
            }else{
                return res.status(404).send({
                    message: 'No existe la nota'
                });
            }

        });
    },
//Metodo para eliminar algun registro de la base de datos por ID
    deleteById: (req, res) => {
        var hospitalId = req.params.Id;

        // Buscamos por ID, eliminamos el objeto y devolvemos el objeto borrado en un JSON
        hospitalModel.findByIdAndRemove(hospitalId, (err, hospitalRemoved) => {
            if(err) return res.status(500).send({ message: 'Error en el servidor' });

            if(hospitalRemoved){
                return res.status(200).send({
                    nota: hospitalRemoved
                });
            }else{
                return res.status(404).send({
                    message: 'No existe la nota'
                });
            }

        });
    },
}
