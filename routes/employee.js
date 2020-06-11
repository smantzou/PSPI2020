const express = require('express')
const router  = express.Router()

const EmployeeController  = require('../controllers/EmployeeController')



router.post('/show', EmployeeController.show)

router.post('/update', EmployeeController.update)
router.post('/delete', EmployeeController.destroy)

module.exports = router