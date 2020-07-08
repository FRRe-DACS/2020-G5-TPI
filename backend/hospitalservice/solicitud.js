const {Router} = require ('express');
const router = Router();

const {getSolicitud, createNote,generarSolicitud,updateNote,deleteNote} = require ('../controllers/solicitud');

    router.route('/')
    .get(getSolicitud)

     router.route('/generar/')
        .post(generarSolicitud)
/*
router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)*/


module.exports = router;