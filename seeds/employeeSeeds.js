const sequelize = require('../config/connection');

const Employee = require('../models/Employee');
const Role = require('../models/Role');
const Department = require('../models/Department');

const employeeSeedData = require('./employeeSeedData.json');
const roleSeedData = require('./roleSeedData.json');
const departmentSeedData = require('./departmentSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ //connect to the db
        force: true
    })
    await Employee.bulkCreate(employeeSeedData); // await create employee seeds

    await Role.bulkCreate(roleSeedData); // await create role seeds

    await Department.bulkCreate(departmentSeedData); // await create department seeds

    process.exit(0); //exit the function

};
seedDatabase();
