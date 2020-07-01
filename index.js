'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8080

// Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//Database
require('./connection'); // importa el archivo de conexión

//Start server
app.listen(port,() => {
    console.log(`Proyecto de centro hospitalario en http://localhost:${port}`) })



// const logger = require('morgan');


// Controllers de medico
const medicoControl = require('./controllers/medico');

// Routes
app.post('/api/medico/create', medicoControl.create);
app.put('/api/medico/update/:Id', medicoControl.updateById);
app.get('/api/medico', medicoControl.getAll);
app.get('/api/medico/:Id', medicoControl.getById);
//app.post('/api/medico/autenticar', medicoControl.authenticate );
app.delete('/api/medico/delete/:Id', medicoControl.deleteById );





/*
app.put('/api/medico/update/:id', medicoControl.update);
app.delete('/api/medico/delete/:id', medicoControl.delete);*/

// Controllers de test
const testControl = require('./controllers/test');

// Routes
app.post('/api/test/create', testControl.create);
app.put('/api/test/update/:id', testControl.updateById);
app.delete('/api/test/delete/:id', testControl.deleteById);
app.get('/api/test/:Id', testControl.getById);
app.get('/api/test', testControl.getAll);


// Controllers de test
const hospitalControl = require('./controllers/hospital');

// Routes
app.post('/api/hospital/create', hospitalControl.create);
app.put('/api/hospital/update/:Id',hospitalControl.updateById);
app.get('/api/hospital',hospitalControl.getAll);
app.get('/api/hospital/:Id',hospitalControl.getById);
app.delete('/api/hospital/delete/:Id', hospitalControl.deleteById);

// Controllers de  historia clinica
const historiacliControl = require('./controllers/historiaclinica');

// Routes
app.post('/api/historiacli/create', historiacliControl.create);
app.put('/api/historiacli/update/:id',historiacliControl.updateById);
app.delete('/api/historiacli/delete/:id', historiacliControl.deleteById);
app.get('/api/historiacli/:Id', historiacliControl.getById);
app.get('/api/historiacli', historiacliControl.getAll);
// Controllers de personal adm
const personalAdmControl = require('./controllers/personalAdm');


// Routes
app.post('/api/personalAdm/create', personalAdmControl.create);
app.put('/api/personalAdm/update/:Id',personalAdmControl.updateById);
app.delete('/api/personalAdm/delete/:Id', personalAdmControl.deleteById);
app.get('/api/personalAdm',personalAdmControl.getAll);
app.get('/api/personalAdm/:Id',personalAdmControl.getById);

