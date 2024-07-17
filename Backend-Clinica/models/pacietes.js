const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const pacientes = sequelize.define('pacientes', {
  // Definir los atributos del modelo
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sexo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  fecha_naciemiento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    direccion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
        id_padre: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
            fecha_ingreso: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'pacientes', 
  timestamps: false,   
});

module.exports = pacientes;
