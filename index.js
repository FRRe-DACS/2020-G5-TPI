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























