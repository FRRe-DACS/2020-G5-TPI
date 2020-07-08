'use strict'

const mongoose = require('mongoose');
// colocamos la url de conexión local y el nombre de la base de datos
mongoose.connect('mongodb+srv://santi:AkZutn2021@grupo5-mjth3.mongodb.net/centrohospitalario', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // enlaza el track de error a la consola (proceso actual)
db.once('open', () => {
  console.log('connected'); // si esta todo ok, imprime esto
});