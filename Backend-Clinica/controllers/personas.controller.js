
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




//funcion para obtener a los pacientes especificos
const tipoPacienteEspecifico = async (req, res) => {
    const { id } = req.params;
    try {   
        console.log(req.body, id, req.params);
        const paciente = await pool.query("SELECT p.*, pa.nombre as nombre_padre ,pa.telefono, pa.ocupacion, s.tipo  from personas.pacientes p JOIN personas.padres pa ON pa.id = p.id_padre JOIN personas.sexo s ON s.id = p.sexo where p.id = $1 ", [id]);
        res.status(200).json(paciente.rows[0]);
    } catch (error) {
        console.log(error);
    }
}

const edadActual = async (req, res) => {
    const { id } = req.params
    try { 
        const edadAnios = await pool.query("select edadActualPaciente($1)", [id])
        const edadMeses = await pool.query("select edadMesesPaciente($1)", [id])
        const edadDias = await pool.query("select edadDiasPaciente($1)", [id])
        const edadSemanas = await pool.query("select edadSemanasPaciente($1)", [id])
    res.status(200).json({anios: edadAnios.rows[0], meses: edadMeses.rows[0],dias: edadDias.rows[0], semanas: edadSemanas.rows[0] });
    } catch (error) {
        console.log(error);

    }
}


const primeraConsulta = async (req, res) => {
    const { id } = req.params;
    try {
        const consulta = await pool.query("SELECT COUNT(*) FROM infogeneral ig where ig.id_paciente = $1", [id])
        if (consulta) {
    res.status(200).json(consulta.rows[0]);
        } else {
    res.status(500).json({error: 'error' });

        }

    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    obtenerPacientes: obtenerPacientes,
    obtenerSexos: obtenerSexos,
    ingresoPacientes: ingresoPacientes,
    busquedaPadres: busquedaPadres,
    tipoPacienteEspecifico: tipoPacienteEspecifico,
    edadActual: edadActual,
    primeraConsulta: primeraConsulta
}