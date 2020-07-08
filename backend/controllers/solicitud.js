const modeloSolicitud = require('../models/solicitud');

module.exports = {
    generarSolicitud: (req, res) => {
        let solicitud = new modeloSolicitud({
            idrecurso: req.body.idrecurso,
            descripcion: req.body.descripcion,
            estado: req.body.estado,
            cantidad: req.body.cantidad
        });

        solicitud.save()
            .then(result => {
                res.json({success: true, result: result});
            })
            .catch(err => {
                res.json({success: false, result: err});
            });
    },
    //Metodo para retornar todos los medicos registrados en la base de datos
    getSolicitud: function (req, res, next) {
        let solicitudList = [];
        modeloSolicitud.find({}, function (err, solicitud) {
            if (err) {
                next(err);
            } else {
                for (let soli of solicitud) {
                   solicitudList.push({id: soli._id,
                        idrecurso: soli.idrecurso,
                        descripcion: soli.descripcion,
                        estado: soli.estado,
                        cantidad:soli.cantidad });
                }
                res.json({status: "success", message: "Solicitud list found!!!", data: {solicitud: solicitudList}});

            }
        });
    }
}