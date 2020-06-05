const express       =    require('express')
const router        =    express.Router()

const CaloriesController = require('../controllers/CaloriesController')

router.post('/addCal',CaloriesController.addCal)
router.get('/showCal',CaloriesController.showCal)
router.get('/takeDate',CaloriesController.takeDate)

module.exports = router 