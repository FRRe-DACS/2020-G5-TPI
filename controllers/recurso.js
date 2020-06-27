const modelRecurso = require('../models/recurso');

module.exports = {
    create: (req, res) => {
        let test = new modelRecurso({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            estado: req.body.estado,
            cantidad: req.body.cantidad,
        });

        test.save()
            .then(result => {
                res.json({success: true, result: result});
            })
            .catch(err => {
                res.json({success: false, result: err});
            });
    },


    updateById: (req, res) => {
        // Recogemos un parámetro por la url
        var recursoId = req.params.id;

        // Recogemos los datos que nos llegen en el body de la petición
        var update = req.body;

        // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado
        modelRecurso.findByIdAndUpdate(recursoId, update, {new: true}, (err, recursoUpdated) => {
            if (err) return res.status(500).send({message: 'Error en el servidor'});

            if (recursoUpdated) {
                return res.status(200).send({
                    nota: recursoUpdated
                });
            } else {
                return res.status(404).send({
                    message: 'No existe el recurso'
                });
            }

        });
    },

    getById: function (req, res, next) {
        console.log(req.body);
        modelRecurso.findById(req.params.Id, function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json({status: "success", message: "Recurso encontrado found found", data: {recurso: result}});
            }
        });
    },

    //Metodo para retornar todos los test registrados en la base de datos
    getAll: function (req, res, next) {
        let recursoList = [];
        modelRecurso.find({}, function (err, recurso) {
            if (err) {
                next(err);
            } else {
                for (let recurs of recurso) {
                    recursoList.push({
                        id: recurs._id,
                        nombre: recurs.nombre,
                        descripcion: recurs.descripcion,
                        estado: recurs.estado,
                        cantidad: recurs.cantidad,
                    });
                }
                res.json({
                    status: "success",
                    message: "Recurso list found!!! Lista de test encontrada !!!",
                    data: {recursos: recursoList}
                });

            }
        });
    },




}