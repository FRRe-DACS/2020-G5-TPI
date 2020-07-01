const modeloTest = require('../models/test');

module.exports = {
    create: (req, res) => {
        let test = new modeloTest({

            Fechacreacion:req.body.Fechacreacion,
            //Sintomas
            Fecha1erossintomas:req.body.Fecha1erossintomas,
            Fiebremayor38grado:req.body.Fiebremayor38grado,
            Diarrea:req.body.Diarrea,
            Vomitos:req.body.Vomitos,
            Dolorgarganta:req.body.Dolorgarganta,
            Rechazoalimento:req.body.Rechazoalimento,
            Perdidadelolfato:req.body.Perdidadelolfato,

            //Enfermedadespreviascomorbilidades/PATOLOGIAS
            Obesidad:req.body.Obesidad,
            Embarazo:req.body.Embarazo,
            Hipertensionarterial:req.body.Hipertensionarterial,
            Bronquiolitis:req.body.Bronquiolitis,
            Asma:req.body.Asma,
            Tuberculosis:req.body.Tuberculosis,
            Fumador:req.body.Fumador,

            //evaluaciondel medico
            Riesgo:req.body.Riesgo ,
            //Tipodemuestraquesetomo
            Hisopadonasofaringeo:req.body.Hisopadonasofaringeo,
            Hisopadoorofaringe:req.body.Hisopadoorofaringe,
            Hisopodaonasofaringeo:req.body.Hisopadonasofaringeo,
            Fechatomademuestra:req.body.Fechatomademuestra,

            //Resultadosyevolucion
            Resultado: req.body.Resultado,
            //Datosdelaspersonasconlaqueestuvoencontacto:[],
            Fechainternacion:req.body.Fechainternacion,
            //Critico o estable
            Estado:req.body.Estado,
            //Condicion Sintomatico/Asintomatico
            Condicion:req.body.Condicion,
            Fechaalta:req.body.Fechaalta,
            Fechadedefuncion:req.body.Fechadedefuncion,
        });

        test.save()
            .then(result => {
                res.json({ success: true, result: result });
            })
            .catch(err => {
                res.json({ success: false, result: err });
            });
    },


    updateById: (req, res) => {
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

    getById: function (req, res, next) {
        console.log(req.body);
        modeloTest.findById(req.params.Id, function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json({status: "success", message: "Test encontrado found found", data: {medico:result}});
            }
        });
    },

    //Metodo para retornar todos los test registrados en la base de datos
    getAll: function (req, res, next) {
        let testList= [];
        modeloTest.find({}, function (err, test) {
            if (err) {
                next(err);
            } else {
                for (let tes of test) {
                   testList.push({id: tes._id,

                       Fechacreacion:req.body.Fechacreacion,
                       //Sintomas
                       Fecha1erossintomas:req.body.Fecha1erossintomas,
                       Fiebremayor38grado:req.body.Fiebremayor38grado,
                       Diarrea:req.body.Diarrea,
                       Vomitos:req.body.Vomitos,
                       Dolorgarganta:req.body.Dolorgarganta,
                       Rechazoalimento:req.body.Rechazoalimento,
                       Perdidadelolfato:req.body.Perdidadelolfato,

                       //Enfermedadespreviascomorbilidades/PATOLOGIAS
                       Obesidad:req.body.Obesidad,
                       Embarazo:req.body.Embarazo,
                       Hipertensionarterial:req.body.Hipertensionarterial,
                       Bronquiolitis:req.body.Bronquiolitis,
                       Asma:req.body.Asma,
                       Tuberculosis:req.body.Tuberculosis,
                       Fumador:req.body.Fumador,

                       //evaluaciondel medico
                       Riesgo:req.body.Riesgo ,
                       //Tipodemuestraquesetomo
                       Hisopadonasofaringeo:req.body.Hisopadonasofaringeo,
                       Hisopadoorofaringe:req.body.Hisopadoorofaringe,
                       Hisopodaonasofaringeo:req.body.Hisopadonasofaringeo,
                       Fechatomademuestra:req.body.Fechatomademuestra,

                       //Resultadosyevolucion
                       Resultado: req.body.Resultado,
                       //Datosdelaspersonasconlaqueestuvoencontacto:[],
                       Fechainternacion:req.body.Fechainternacion,
                       //Critico o estable
                       Estado:req.body.Estado,
                       //Condicion Sintomatico/Asintomatico
                       Condicion:req.body.Condicion,
                       Fechaalta:req.body.Fechaalta,
                       Fechadedefuncion:req.body.Fechadedefuncion})
                }
                res.json({status: "success", message: "Test list found!!! Lista de test encontrada !!!", data: {tests: testList}});

            }
        });
    },


    deleteById: (req, res) => {
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
                    message: 'No existe el TEST'
                });
            }

        });




    }


}
