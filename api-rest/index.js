'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(port,() => {
	console.log(`Proyecto de centro hospitalario en http://localhost:${port}`)
})