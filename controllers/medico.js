const modeloMedico = require('../models/medico');

module.exports = {
    create: (req, res) => {
        let medico = new modeloMedico({
            matricula: req.body.matricula,
            apynombre: req.body.apynombre,
            especialidad : req.body.especialidad,
            experiencia : req.body.experiencia,
            telefono : req.body.telefono,
            cantpacs : req.body.cantpacs,
        });

        medico.save()
            .then(result => {
                res.json({ success: true, result: result });
            })
            .catch(err => {
                res.json({ success: false, result: err });
            });
    },


    update: (req, res) => {
        // Recogemos un parámetro por la url
        var medicoId = req.params.id;

        // Recogemos los datos que nos llegen en el body de la petición
        var update = req.body;

        // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado
        modeloMedico.findByIdAndUpdate(medicoId, update, {new:true}, (err, medicoUpdated) => {
            if(err) return res.status(500).send({message: 'Error en el servidor'});

            if(medicoUpdated){
                return res.status(200).send({
                    nota: medicoUpdated
                });
            }else{
                return res.status(404).send({
                    message: 'No existe el medico'
                });
            }

        });
    },


    delete: (req, res) => {
         var medicoId = req.params.id;
        // Buscamos por ID, eliminamos el objeto y devolvemos el objeto borrado en un JSON
        modeloMedico.findByIdAndRemove(medicoId, (err, medicoRemoved) => {
            if(err) return res.status(500).send({ message: 'Error en el servidor' });
            if(medicoRemoved){
                return res.status(200).send({
                    nota: medicoRemoved
                });
            }else{
                 return res.status(404).send({
                    message: 'No existe el medico'
                });
            }

        });




}


}