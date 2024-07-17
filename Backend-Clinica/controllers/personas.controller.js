
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
    const {nombre, sexo,fecha, escolaridad , direccion ,nombre_padre,ocupacion,in_edad ,
    telefono } = req.body.paciente
    try {
        console.log(nombre, sexo,fecha, escolaridad , direccion ,nombre_padre,ocupacion,in_edad ,
    telefono);
        const valores = await pool.query("CALL ingreso_paciente($1 ,$2, $3, $4, $5, $6, $7,$8, $9); ",
            [nombre, sexo, fecha, escolaridad, direccion, nombre_padre, ocupacion, in_edad,
                telefono]);
        if (valores) {
            res.status(200).json({"mensajes":"ingresado correctamente"});
        } else {
            res.status(500).json({"mensajes":"error, ingreso invalido"});

        }
    } catch (error) {
        console.error(error);
    }
}



module.exports = {
    obtenerPacientes: obtenerPacientes,
    obtenerSexos: obtenerSexos,
    ingresoPacientes:ingresoPacientes
}