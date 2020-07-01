const personalAdmModel = require('../models/personalAdm');
//
// Cargamos el módulo de bcrypt
const bcrypt = require('bcrypt');
// Cargamos el módulo de jsonwebtoken
const jwt = require('jsonwebtoken');

// Codificamos las operaciones que se podran realizar con relacion a los usuarios
module.exports = {
    create: function (req, res, next) {

        personalAdmModel.create ({
                apynombre: req.body.apynombre,
                telefono: req.body.telefono,
                password: req.body.password,
                email: req.body.email,
                consulta: req.body.consulta,
                descripcion: req.body.descripcion

            },
            function (err, result) {
                if (err)
                    next(err);
                else
                    res.json({status: "Ok", message: "Personal Administrativo agregado exitosamente!!!", data: result });

            });
    },
    /*
        authenticate: function (req, res, next) {
            personalAdmModel.findOne({email: req.body.email}, function (err, medicoInfo) {
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

     */


    getById: function (req, res, next) {
        console.log(req.body);
        personalAdmModel.findById(req.params.Id, function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json({status: "success", message: "Personal Administrativo found!!!", data: {personalAdm:result}});
            }
        });
    },
//Metodo para retornar todos los videojuegos registrados en la base de datos
    getAll: function (req, res, next) {
        let personalAdmList = [];
        personalAdmModel.find({}, function (err, personalAdm) {
            if (err) {
                next(err);
            } else {
                for (let personal of personalAdm) {
                    personalAdmList.push({id: personal._id,
                        apynombre: personal.apynombre,
                        telefono: personal.telefono,
                        password: personal.password,
                        email: personal.email,
                        consulta: personal.consulta,
                        descripcion: personal.descripcion});
                }
                res.json({status: "success", message: "Personal Administrativo list found!!!", data: {personalAdm: personalAdmList}});

            }
        });
    },
//Metodo para actualizar algun registro de la base de datos por ID
    updateById: (req, res) => {
        // Recogemos un parámetro por la url
        var personalAdmId = req.params.Id;

        // Recogemos los datos que nos llegen en el body de la petición
        var update = req.body;

        // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado
        personalAdmModel.findByIdAndUpdate(personalAdmId, update, {new:true}, (err, personalAdmUpdated) => {
            if(err) return res.status(500).send({message: 'Error en el servidor'});

            if(personalAdmUpdated){
                return res.status(200).send({
                    nota: personalAdmUpdated
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
        var personalAdmId = req.params.Id;

        // Buscamos por ID, eliminamos el objeto y devolvemos el objeto borrado en un JSON
        personalAdmModel.findByIdAndRemove(personalAdmId, (err, personalAdmRemoved) => {
            if(err) return res.status(500).send({ message: 'Error en el servidor' });

            if(personalAdmRemoved){
                return res.status(200).send({
                    nota: personalAdmRemoved
                });
            }else{
                return res.status(404).send({
                    message: 'No existe la nota'
                });
            }

        });
    },
}