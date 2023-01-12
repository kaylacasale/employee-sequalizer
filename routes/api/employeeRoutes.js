const router = require('express').Router();
const Employee = require('../../models/Employee');

router.get('/', async (req, res) => {
    const employeeData = await Employee.findAll();
    return res.json(employeeData);
});

