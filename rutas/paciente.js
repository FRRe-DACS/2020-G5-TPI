/*const {Router} = require('express');
//exporta una funcion que devuelve un objeto

const ruta = Router();
const {create,  asigHospital, updateById, getAll, getById, deleteById} = require('../controllers/paciente.js')

ruta.route('/')
    .get(getAll)
    .post(create);


ruta.route('/:Id')
    .get(getById)
    .delete(deleteById);
ruta.route('/update/:Id')
    .put(updateById)

module.exports = ruta; */