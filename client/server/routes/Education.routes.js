import express from 'express'
import educationCtrl from '../controller/Education.controller.js'
import authCtrl from '../controller/auth.controller.js'
const router = express.Router()
router.route('/api/educations').post(educationCtrl.create)
router.route('/api/educations').get(educationCtrl.list)
router.param('educationId', educationCtrl.educationByID)
router.route('/api/educations/:educationId').get(authCtrl.requireSignin, educationCtrl.read)
router.route('/api/educations/:educationId').put(authCtrl.requireSignin, educationCtrl.update)
router.route('/api/educations/:educationId').delete(authCtrl.requireSignin, educationCtrl.remove)
router.route('/api/educations').delete(authCtrl.requireSignin, educationCtrl.removeAll)
export default router