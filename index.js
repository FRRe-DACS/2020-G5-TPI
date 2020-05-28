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



// Controllers de medico
const medicoControl = require('./controllers/medico');

// Routes
app.post('/api/medico/create', medicoControl.create);
app.put('/api/medico/update/:id', medicoControl.update);
app.delete('/api/medico/delete/:id', medicoControl.delete);

// Controllers de test
const testControl = require('./controllers/test');

// Routes
app.post('/api/test/create', testControl.create);
app.put('/api/test/update/:id', testControl.update);
app.delete('/api/test/delete/:id', testControl.delete);

// Controllers de test
const hospitalControl = require('./controllers/hospital');

// Routes
app.post('/api/hospital/create', hospitalControl.create);
app.put('/api/hospital/update/:id',hospitalControl.update);
app.delete('/api/hospital/delete/:id', hospitalControl.delete);

// Controllers de test
const historiacliControl = require('./controllers/historiaclinica');

// Routes
app.post('/api/historiacli/create', historiacliControl.create);
app.put('/api/historiacli/update/:id',historiacliControl.update);
app.delete('/api/historiacli/delete/:id', historiacliControl.delete);

// Controllers de test
const personalAdmControl = require('./controllers/personalAdm');

// Routes
app.post('/api/personalAdm/create', personalAdmControl.create);
app.put('/api/personalAdm/update/:id',personalAdmControl.update);
app.delete('/api/personalAdm/delete/:id', personalAdmControl.delete);

