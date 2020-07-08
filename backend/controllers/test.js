const modeloTest = require('../models/test');
const pacienteModel = require('../models/paciente');
module.exports = {
    create: (req, res) => {
        let test = new modeloTest({
            //fecha cuando da positivo como campo obligatorio momento que da el caso positivo o negativo
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

    asigPaciente: async function(req,res) {

        // crear test para el paciente
        const testN = new modeloTest(req.body)
        //buscar el paciente para asignar un test
        const paciente = await pacienteModel.findById(req.params)
        //asignar al paciente un test
        testN.pacientes = paciente
        //guardamos el test para el paciente
        await testN.save()
        //asignar el test dentro del array de pacientes del hospital
        paciente.tests.push(testN)
        //guardar el test en paciente
        await paciente.save();
        //enviar al paciente el test
        res.send(testN)

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

                       Fechacreacion:tes.Fechacreacion,
                       //Sintomas
                       Fecha1erossintomas:tes.Fecha1erossintomas,
                       Fiebremayor38grado:tes.Fiebremayor38grado,
                       Diarrea:tes.Diarrea,
                       Vomitos:tes.Vomitos,
                       Dolorgarganta:tes.Dolorgarganta,
                       Rechazoalimento:tes.Rechazoalimento,
                       Perdidadelolfato:tes.Perdidadelolfato,

                       //Enfermedadespreviascomorbilidades/PATOLOGIAS
                       Obesidad:tes.Obesidad,
                       Embarazo:tes.Embarazo,
                       Hipertensionarterial:tes.Hipertensionarterial,
                       Bronquiolitis:tes.Bronquiolitis,
                       Asma:tes.Asma,
                       Tuberculosis:tes.Tuberculosis,
                       Fumador:tes.Fumador,

                       //evaluaciondel medico
                       Riesgo:tes.Riesgo ,
                       //Tipodemuestraquesetomo
                       Hisopadonasofaringeo:tes.Hisopadonasofaringeo,
                       Hisopadoorofaringe:tes.Hisopadoorofaringe,
                       Hisopodaonasofaringeo:tes.Hisopadonasofaringeo,
                       Fechatomademuestra:tes.Fechatomademuestra,

                       //Resultadosyevolucion
                       Resultado: tes.Resultado,
                       //Datosdelaspersonasconlaqueestuvoencontacto:[],
                       Fechainternacion:tes.Fechainternacion,
                       //Critico o estable
                       Estado:tes.Estado,
                       //Condicion Sintomatico/Asintomatico
                       Condicion:tes.Condicion,
                       Fechaalta:tes.Fechaalta,
                       Fechadedefuncion:tes.Fechadedefuncion})
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