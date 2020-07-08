const modeloHistoriacli = require('../models/historiaclinica');

module.exports = {
    create: (req, res) => {
        let historiacli = new modeloHistoriacli({

            Habitofisiologico : req.body.Habitofisiologico ,
            Habitotoxico: req.body.Habitotoxico,
            Enfermedadesprevia: req.body.Enfermedadesprevia ,
            Fechaultimoasiento: req.body.Fechaultimoasiento ,
            Peso: req.body.Peso ,
            Altura: req.body.Altura ,
            Edad: req.body.Edad,
        });

        historiacli.save()
            .then(result => {
                res.json({ success: true, result: result });
            })
            .catch(err => {
                res.json({ success: false, result: err });
            });
    },




    updateById: (req, res) => {
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

    deleteById: (req, res) => {
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
    },


    getById: function (req, res, next) {
        console.log(req.body);
        modeloHistoriacli.findById(req.params.Id, function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json({status: "success", message: "Historia clinica encontrada", data: {historiaclinica:result}});
            }
        });
    },

    //Metodo para retornar todos los test registrados en la base de datos
    getAll: function (req, res, next) {
        let historiacliList= [];
        modeloHistoriacli.find({}, function (err,hist) {
            if (err) {
                next(err);
            } else {
                for (let his of hist) {
                   historiacliList.push({id: his._id,
                        Habitofisiologico : his.Habitofisiologico ,
                        Habitotoxico: his.Habitotoxico,
                        Enfermedadesprevia: his.Enfermedadesprevia ,
                        Fechaultimoasiento: his.Fechaultimoasiento ,
                        Peso: his.Peso ,
                        Altura: his.Altura,
                        Edad: his.Edad

                    });
                }
                res.json({status: "success", message: "Lista de historias clinicas !!!", data: {tests: historiacliList}});

            }
        });
    },


}