const modeloHospital = require('../models/hospital');

module.exports = {
    create: (req, res) => {
        let hospital = new modeloHospital({
            nombre: req.body.nombre,
            localidad: req.body.localidad,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            ApyNomDirector: req.body.ApyNomDirector,
            capMaxPaciente: req.body.capMaxPaciente

        });

        hospital.save()
            .then(result => {
                res.json({ success: true, result: result });
            })
            .catch(err => {
                res.json({ success: false, result: err });
            });
    },

    update: (req, res) => {
        // Recogemos un parámetro por la url
        var hospitalId = req.params.id;

        // Recogemos los datos que nos llegen en el body de la petición
        var update = req.body;

        // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado
        modeloHospital.findByIdAndUpdate(hospitalId, update, {new:true}, (err, hospitalUpdated) => {
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

    delete: (req, res) => {
      var hospitalId = req.params.id;

        // Buscamos por ID, eliminamos el objeto y devolvemos el objeto borrado en un JSON
    modeloHospital.findByIdAndRemove(hospitalId, (err, hospitalRemoved) => {
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
  }
}