const path = require('path');
const router = require('express').Router();
const Employee = require('../../models/Employee');

router.get('/', async (req, res) => {
    const employeeData = await Employee.findAll();
    return res.json(employeeData);
});

//* return the employeeData promise inside of the JSON response
router.post('/', async (req, res) => {
    const employeeData = await Employee.create(req.body);
    return res.json(employeeData);
})
//* view employees by manager
router.get('/:manager_id', async (req, res) => {
    const employeeData = await Employee.findAll({
        order: ['first_name', 'last_name'],
        where: {
            manager_id: req.params.manager_id,
        },

    })
    return res.json(employeeData)
})
//* udpate employee managers
router.put('/:manager_id', async (req, res) => {
    const employeeData = await Employee.update(
        {
            //* all the feilds able to be updated and the data attached to the request body
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            role_id: req.body.role_id,
        },
        {
            //* gets a manager based on the manager_id given in the request parameters
            where: {
                manager_id: req.params.manager_id,
            }
        }
    )
    return res.json(employeeData)
});
