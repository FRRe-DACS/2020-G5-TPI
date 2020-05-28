const modeloPersonalAdm = require('../models/personalAdm');

module.exports = {
    create: (req, res) => {
        let personalAdm = new modeloPersonalAdm({
            apynombre:req.body.apynombre,
            telefono:req.body.telefono,
            consulta:req.body.consulta,
            descripcion:req.body.descripcion,
        });

        personalAdm.save()
            .then(result => {
                res.json({ success: true, result: result });
            })
            .catch(err => {
                res.json({ success: false, result: err });
            });
    },

    update: (req, res) => {
        // Recogemos un parámetro por la url
        var personalAdmId = req.params.id;

        // Recogemos los datos que nos llegen en el body de la petición
        var update = req.body;

        // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado
        modeloPersonalAdm.findByIdAndUpdate(personalAdmId, update, {new:true}, (err, personalAdmUpdated) => {
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

    delete: (req, res) => {
        var personalAdmId = req.params.id;

        // Buscamos por ID, eliminamos el objeto y devolvemos el objeto borrado en un JSON
        modeloPersonalAdm.findByIdAndRemove(personalAdmId, (err, personalAdmRemoved) => {
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
    }
}