const modeloTest = require('../models/test');

module.exports = {
    create: (req, res) => {
        let test = new modeloTest({
            Fechaprimeros_sintomas: req.body.Fechaprimeros_sintomas,
            Fechaconsulta: req.body.Fechaconsulta,
            Sintomas: req.body.Sintomas,
            Tipodemuestra : req.body.Tipodemuestra,
            Resultado: req.body.Resultado,
            Riesgo: req.body.Riesgo,
        });

        test.save()
            .then(result => {
                res.json({ success: true, result: result });
            })
            .catch(err => {
                res.json({ success: false, result: err });
            });
    },


    update: (req, res) => {
        // Recogemos un parámetro por la url
        var testId = req.params.id;

        // Recogemos los datos que nos llegen en el body de la petición
        var update = req.body;

        // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado
        modeloTest.findByIdAndUpdate(testId, update, {new:true}, (err, testUpdated) => {
            if(err) return res.status(500).send({message: 'Error en el servidor'});

            if(testUpdated){
                return res.status(200).send({
                    nota: testUpdated
                });
            }else{
                return res.status(404).send({
                    message: 'No existe el test'
                });
            }

        });
    },


    delete: (req, res) => {
        var testId = req.params.id;
        // Buscamos por ID, eliminamos el objeto y devolvemos el objeto borrado en un JSON
        modeloTest.findByIdAndRemove(testId, (err, testRemoved) => {
            if(err) return res.status(500).send({ message: 'Error en el servidor' });
            if(testRemoved){
                return res.status(200).send({
                    nota: testRemoved
                });
            }else{
                return res.status(404).send({
                    message: 'No existe el medico'
                });
            }

        });




    }


}
