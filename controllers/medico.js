// Cargamos el modelo recien creado
const medicoModel = require('../models/medico');
// Cargamos el módulo de bcrypt
const bcrypt = require('bcrypt');
// Cargamos el módulo de jsonwebtoken
const jwt = require('jsonwebtoken');

// Codificamos las operaciones que se podran realizar con relacion a los usuarios
module.exports = {
    create: function (req, res, next) {

          medicoModel.create ({
                matricula: req.body.matricula,
                apynombre: req.body.apynombre,
                password: req.body.password,
                especialidad: req.body.especialidad,
                experiencia: req.body.experiencia,
                telefono: req.body.telefono,
                cantpac: req.body.cantpac,
                email: req.body.email
            },
            function (err, result) {
                if (err)
                    next(err);
                else
                    res.json({status: "Ok", message: "Medico agregado exitosamente!!!", data: result });

            });
    },
    authenticate: function (req, res, next) {
        medicoModel.findOne({email: req.body.email}, function (err, medicoInfo) {
            if (err) {
                next(err);
            } else {
                if (bcrypt.compareSync(req.body.password, medicoInfo.password)) {
                    const token = jwt.sign({id: medicoInfo._id}, req.app.get('secretKey'), {expiresIn: '1h'});
                    res.json({
                        status: "Ok",
                        message: "El Medico ha sido autenticado!!!",
                        data: {medico: userInfo, token: token}
                    });
                } else {
                    res.json({status: "error", message: "Invalid email/password!!", data: null});
                }
            }
        });
    },
    getById: function (req, res, next) {
        console.log(req.body);
        medicoModel.findById(req.params.Id, function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json({status: "success", message: "Medico found!!!", data: {medico:result}});
            }
        });
    },
//Metodo para retornar todos los videojuegos registrados en la base de datos
    getAll: function (req, res, next) {
        let medicoList = [];
        medicoModel.find({}, function (err, medico) {
            if (err) {
                next(err);
            } else {
                for (let medic of medico) {
                    medicoList.push({id: medic._id,
                        matricula: medic.matricula,
                        apynombre: medic.apynombre,
                        especialidad: medic.especialidad,
                        experiencia: medic.experiencia,
                        telefono: medic.telefono,
                        cantpac: medic.cantpac});
                }
                res.json({status: "success", message: "Medico list found!!!", data: {medico: medicoList}});

            }
        });
    },
//Metodo para actualizar algun registro de la base de datos por ID
    updateById: function (req, res, next) {
        medicoModel.findByIdAndUpdate(req.params.medicoId, {matricula: req.body.matricula,
            apynombre: req.body.apynombre,
            password: req.body.password,
            especialidad: req.body.especialidad,
            experiencia: req.body.experiencia,
            telefono: req.body.telefono,
            cantpac: req.body.cantpac,
            email: req.body.email}, function (err, medicoInfo) {
            if (err)
                next(err);
            else {
                res.json({status: "success", message: "Medico updated successfully!!!", data: null});
            }
        });
    },
//Metodo para eliminar algun registro de la base de datos por ID
    deleteById: function (req, res, next) {
        medicoModel.findByIdAndRemove(req.params.medicoId, function (err, medicoInfo) {
            if (err)
                next(err);
            else {
                res.json({status: "success", message: "Medico deleted successfully!!!", data: null});
            }
        });
    },
}
