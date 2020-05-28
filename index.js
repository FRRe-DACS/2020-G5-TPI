'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/api/product',(req,res)=> {
 res.send(200, {products:[]})

})


require('./connection'); // importa el archivo de conexión
const Medico = require('./models/medico'); // importa el esquema
/*const medico = new Medico({ apynombre: 'eldevsin.site',
							matricula:2765 }); // crea la entidad*/

app.post('/api/medico/',(req,res)=> {
  //acceder al cuerpo de la peticion gracias a midleware de body parser puedo parsear y tratarlo como objeto json
   console.log('POST /api/medico ')
   console.log(req.body) //mostrar el cuerpo de la peticion

   let medico = new Medico()
    medico.matricula = req.body.matricula
    medico.apynombre = req.body.apynombre
    medico.especialidad = req.body.especialidad
    medico.experiencia = req.body.experiencia
    medico.telefono = req.body.telefono
    medico.cantpacs = req.body.cantpacs
    medico.save((err,medicoStored) => {
    	if (err) res.status(500).send ({message:'Error al salvar la base de datos:${err}'})

    		res.status(200).send({medico: medicoStored})
    		
   })
 })



//medico.save(); // guarda en bd


app.listen(port,() => {
	console.log(`Proyecto de centro hospitalario en http://localhost:${port}`)
})








