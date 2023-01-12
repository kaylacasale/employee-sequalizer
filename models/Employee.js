const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model { }

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            validate: {
                len: [0, 30]
            },
        },
        last_name: {
            type: DataTypes.STRING,
            validate: {
                len: [0, 30]
            },
        },
        role_id: {
            type: DataTypes.INTEGER,
        },
        manager_id: {
            type: DataTypes.INTEGER,
            allowNull: true, //* null if employee has no manager
        }

    },
    {
        sequelize,
        timestanmps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee'
    }
)

module.exports = Employee;