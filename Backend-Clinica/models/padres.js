const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const padres = sequelize.define('padres', {
  // Definir los atributos del modelo
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ocupacion: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    telefono: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'padres', 
  timestamps: false,   
});

module.exports = padres;
