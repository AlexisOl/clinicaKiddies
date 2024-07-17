const express = require('express');

const router = express.Router();
const personasController = require('../controllers/personas.controller');
const ruta = '/clinica';
// rutas
router.get(`${ruta}/todosPacientes`, personasController.obtenerPacientes)
router.get(`${ruta}/todosSexos`, personasController.obtenerSexos)
router.post(`${ruta}/ingreso`, personasController.ingresoPacientes)
router.get(`${ruta}/padresTotales`, personasController.busquedaPadres)


module.exports = router;