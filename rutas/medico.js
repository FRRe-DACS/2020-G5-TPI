const {Router} = require('express');
//exporta una funcion que devuelve un objeto

const ruta = Router();

const {create, authenticate, asigHospital, updateById, getAll, getById, deleteById} = require('../controllers/medico.js')


ruta.route('/')
    .get(getAll)
    //.post(create);


ruta.route('/:Id')
    .get(getById);

ruta.route('/update/:Id')
    .put(updateById)

module.exports = ruta;