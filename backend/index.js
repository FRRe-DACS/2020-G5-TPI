'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const cors = require('cors');

const app = express()
const port = process.env.PORT || 8080


// Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors()); // dos servidores puedan intercambiar datos entre ellas back y front
app.use(express.json()); //me genera formato json

//Database
require('./connection'); // importa el archivo de conexión


//Start server

app.listen(port,() => {
    console.log(`Proyecto de centro hospitalario en http://localhost:${port}`) })

//Servicios
app.use('/api/recurso', require('./hospitalservice/obtenerrecurso'));
app.use('/api/solicitud', require('./hospitalservice/solicitud'));



// Controllers de medico
const medicoControl = require('./controllers/medico');

app.post('/api/medico/create/', medicoControl.create);
app.post('/api/medico/autenticar/', medicoControl.authenticate );
app.post('/api/medico/create/:_id', medicoControl.asigHospital);
app.put('/api/medico/update/:Id', medicoControl.updateById);
app.get('/api/medico', medicoControl.getAll);
app.get('/api/medico/:Id', medicoControl.getById);
app.delete('/api/medico/delete/:Id', medicoControl.deleteById );


// Controllers de test
const testControl = require('./controllers/test');

// Routes
app.post('/api/test/create', testControl.create);
app.put('/api/test/update/:id', testControl.updateById);
app.delete('/api/test/delete/:id', testControl.deleteById);
app.get('/api/test/:Id', testControl.getById);
app.get('/api/test', testControl.getAll);
app.post('/api/test/create/:_id', testControl.asigPaciente);

// Controllers de hospital
const hospitalControl = require('./controllers/hospital');

// Routes
app.post('/api/hospital/create', hospitalControl.create);
app.put('/api/hospital/update/:Id',hospitalControl.updateById);
app.get('/api/hospital',hospitalControl.getAll);
app.get('/api/hospital/:Id',hospitalControl.getById);
app.delete('/api/hospital/delete/:Id', hospitalControl.deleteById);


// Controllers de personal adm
const personalAdmControl = require('./controllers/personalAdm');


// Routes
app.post('/api/personalAdm/create', personalAdmControl.create);
app.post('/api/personalAdm/autenticar/', personalAdmControl.authenticate );
app.put('/api/personalAdm/update/:Id',personalAdmControl.updateById);
app.delete('/api/personalAdm/delete/:Id', personalAdmControl.deleteById);
app.get('/api/personalAdm',personalAdmControl.getAll);
app.get('/api/personalAdm/:Id',personalAdmControl.getById);
app.post('/api/personalAdm/create/:_id', personalAdmControl.asigHospital);

// Controlador de recurso y rutas

const recursoControl = require('./controllers/recurso');

app.post('/api/recurso/create', recursoControl.create);
app.put('/api/recurso/update/:id', recursoControl.updateById);
app.get('/api/recurso/:Id', recursoControl.getById);
//app.get('/api/recurso', recursoControl.getAll);
app.post('/api/recurso/create/:_id', recursoControl.asigHospital);

// Controllers de paciente
const pacienteControl = require('./controllers/paciente');

// Routes
app.post('/api/paciente/create', pacienteControl.create);
app.put('/api/paciente/update/:Id',pacienteControl.updateById);
app.delete('/api/paciente/delete/:Id', pacienteControl.deleteById);
app.get('/api/paciente',pacienteControl.getAll);
app.get('/api/paciente/:Id',pacienteControl.getById);
app.post('/api/paciente/create/:_id', pacienteControl.asigMedico);

