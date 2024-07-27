const express = require('express');

const router = express.Router();
const personasController = require('../controllers/personas.controller');
const ruta = '/clinica';
// rutas
router.get(`${ruta}/todosPacientes`, personasController.obtenerPacientes)
router.get(`${ruta}/todosSexos`, personasController.obtenerSexos)
router.post(`${ruta}/ingreso`, personasController.ingresoPacientes)
router.get(`${ruta}/padresTotales`, personasController.busquedaPadres)
router.get(`${ruta}/tipoPaciente/:id`, personasController.tipoPacienteEspecifico)
router.get(`${ruta}/edadActual/:id`, personasController.edadActual)
router.get(`${ruta}/tienePrimeraCita/:id`, personasController.primeraConsulta)





module.exports = router;