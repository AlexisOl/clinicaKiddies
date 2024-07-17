
// controlador para los pacientes
const { pool } = require('../db/database'); 

const pacientes = require('../models/pacientes');

// funcion para obtener a todos los pacientes
const obtenerPacientes = async (req, res) => {
    try {
        const valores = await pool.query("select p.*, pa.nombre as nombre_padre, pa.ocupacion from personas.pacientes p JOIN personas.padres pa on pa.id = p.id_padre;");
         res.status(200).json(valores.rows);
    } catch (error) {
        console.error(error);
    }
}

// funcion para obtener a todos los sexos
const obtenerSexos = async (req, res) => {
    try {
        const valores = await pool.query("select s.* from personas.sexo s;");
         res.status(200).json(valores.rows);
    } catch (error) {
        console.error(error);
    }
}

//funcion para el ingreso de pacientes
const ingresoPacientes = async (req, res) => {
    const { ocupacion, edad, telefono } = req.body.padre;
    const nombre_padre = req.body.padre.nombre;
    const { nombre, sexo, fecha_nacimiento, escolaridad, direccion } = req.body.paciente;
    try {
        const valores = await pool.query("CALL ingreso_paciente($1 ,$2, $3, $4, $5, $6, $7,$8, $9); ",
            [nombre, sexo, fecha_nacimiento, escolaridad, direccion, nombre_padre, ocupacion, edad, telefono]);
        if (valores) {
            res.status(200).json({"mensajes":"ingresado correctamente"});
        } else {
            res.status(500).json({"mensajes":"error, ingreso invalido"});
        }
    } catch (error) {
        console.error(error);
    }
}

//funcion para obtener a los padres ya registrados
const busquedaPadres = async (req, res) => {
    try {   
        const padres = await pool.query("SELECT p.* from personas.padres p");
        res.status(200).json(padres.rows);
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    obtenerPacientes: obtenerPacientes,
    obtenerSexos: obtenerSexos,
    ingresoPacientes: ingresoPacientes,
    busquedaPadres: busquedaPadres
}