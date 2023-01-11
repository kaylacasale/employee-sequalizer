const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Company extends Model { }

Company.init(
    {
        company_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'company'
    }
)


module.exports = Company;