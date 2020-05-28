'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8080

//Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Database
require('./connection'); // importa el archivo de conexión

// Controllers
const hospitalControl = require('./controllers/hospital');
const historiacliControl = require('./controllers/historiaclinica');

// Routes
app.post('/api/hospital/create', hospitalControl.create);
app.put('/api/hospital/update/:id', hospitalControl.update);
//app.get('/api/user/retrieve', hospitalControl.retrieve);
app.delete('/api/hospital/delete/:id', hospitalControl.delete);


app.post('/api/historiacli/create', historiacliControl.create);
app.put('/api/historiacli/update/:id', historiacliControl.update);
//app.get('/api/user/retrieve', historiacliControl.retrieve);
app.delete('/api/historiacli/delete/:id', historiacliControl.delete);


// Start server
app.listen(port,() => {
	console.log(`Proyecto de centro hospitalario en http://localhost:${port}`)
})








