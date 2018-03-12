'use strict';
module.exports = (sequelize, DataTypes) => {
  const Email = sequelize.define('Email', {
    email: {
      type: DataTypes.TEXT,
      primaryKey: true,
      allowNull: false,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    portfolio: {
      type: DataTypes.JSON,
    }
  });

  Email.associate = (models) => {
    // associations can be defined here
  };

  return Email;

};