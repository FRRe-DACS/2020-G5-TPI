const modeloHistoriacli = require('../models/historiaclinica');

module.exports = {
    create: (req, res) => {
        let historiacli = new modeloHistoriacli({

            nrohistoriacli: req.body.nrohistoriacli ,
            Habitofisiologico : req.body.Habitofisiologico ,
            Habitotoxico: req.body.Habitotoxico,
            Enfermedadesprevia: req.body.Enfermedadesprevia ,
            Fechaultimoasiento: req.body.Fechaultimoasiento ,
            Datosfisico: req.body.Datosfisico ,

        });

        historiacli.save()
            .then(result => {
                res.json({ success: true, result: result });
            })
            .catch(err => {
                res.json({ success: false, result: err });
            });
    },

    update: (req, res) => {
        // Recogemos un parámetro por la url
        var historiacliId = req.params.id;

        // Recogemos los datos que nos llegen en el body de la petición
        var update = req.body;

        // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado
        modeloHistoriacli.findByIdAndUpdate(historiacliId, update, {new:true}, (err, historiacliUpdated) => {
            if(err) return res.status(500).send({message: 'Error en el servidor'});

            if(historiacliUpdated){
                return res.status(200).send({
                    nota: historiacliUpdated
                });
            }else{
                return res.status(404).send({
                    message: 'No existe la nota'
                });
            }

        });
    },

    delete: (req, res) => {
        var historiacliId = req.params.id;

        // Buscamos por ID, eliminamos el objeto y devolvemos el objeto borrado en un JSON
        modeloHistoriacli.findByIdAndRemove(historiacliId, (err, historiacliRemoved) => {
            if(err) return res.status(500).send({ message: 'Error en el servidor' });

            if(historiacliRemoved){
                return res.status(200).send({
                    nota: historiacliRemoved
                });
            }else{
                return res.status(404).send({
                    message: 'No existe la nota'
                });
            }

        });
    }
}