const express       =    require('express')
const router        =    express.Router()

const AuthController = require('../controllers/AuthController')
const upload         = require('../middleware/upload')

router.post('/register',AuthController.register)
router.post('/login',AuthController.login)
router.get('/index',AuthController.index)
router.post('/destroy',AuthController.destroy)
router.post('/update',AuthController.update)
router.post('/show', AuthController.show)
router.post('/updateMetrics', AuthController.updateMetrics)
router.post('/updateAvatar',upload.single('avatar'))
router.post('/pairAvatarAndUser', AuthController.pair)
module.exports = router 