


const express = require('express')


const utilidades = require('../controllers/utilidades.controller');

const rutas = express.Router();
const ruta = '/prueba';


//enviar la imagen 
rutas.get(`${ruta}/obtenerImagen`, utilidades.envio)



module.exports = rutas;
