const express = require('express');
const cons = require('cors');
const environment = require('./config');
const rutas = require('./routes/personas.routes')

// ingreso server
const servidor = express();

var opciones = {
    origen :environment.URL_BACK
};
servidor.use(cons(opciones));
servidor.use(express.json());
servidor.use(express.urlencoded({ extended: true }))
//rutas de usuario
servidor.use('/app', rutas)
//ingreso del puerto
const puerto = process.env.PORT || 8080;

servidor.listen(puerto, () => {
    console.log(`servidor en ${puerto}`);
});