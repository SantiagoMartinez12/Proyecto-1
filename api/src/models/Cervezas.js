const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('cervezas', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false ,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estilo: {
      type: DataTypes.STRING,
    },
    cerveceria:{
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.DECIMAL,
    },
    happy: {
     type: DataTypes.DECIMAL,
   },
   imagen: {
     type: DataTypes.STRING,
   },
   estado: {
     type: DataTypes.BOOLEAN,
     defaultValue: false
   }
  });
};
