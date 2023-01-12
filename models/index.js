const Employee = require('./Employee'); // employee has one role
const Role = require('./Role'); // role belongs to employee
const Department = require('./Department')
//learen tomorrow (one-to-one, one-to-msny, etc.
//* same as mySQL: 
// under CREATE TABLE employees
//* 'foreignKey: 'role_id' ~
// 'FOREIGN KEY (role_id) REFERENCES roles(id)'
//* 'onDelete: 'CASCADE' ~
// 'ON DELETE SET NULL'

//* relate foreign key (role_id parameter) of Employee to Role model's id 
Employee.hasOne(Role, {
    foreignKey: 'role_id',
    //* if Employee is deleted
    onDelete: 'CASCADE',
});

//* so Role can reference Employee by 'role_id' parameter
Role.belongsTo(Employee, {
    foreignKey: 'role_id'
});

//* same as mySQL:
// under CREATE TABLE roles
//* 'foreignKey: department_id' ~
// 'FOREIGN KEY (department_id) REFERENCES departments(id) 
//* 'onDelete: 'CASCADE'' ~
// 'ON DELETE SET NULL'

Role.hasOne(Department, {
    foreignKey: 'department_id',
    onDelete: 'CASCADE',
});

Department.belongsTo(Role, {
    foreignKey: 'department_id'
});







module.exports = { Employee, Role, Department };