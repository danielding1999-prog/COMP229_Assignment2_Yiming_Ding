import express from 'express'
import educationCtrl from '../controller/Education.controller.js'
const router = express.Router()
router.route('/api/educations').post(educationCtrl.create)
router.route('/api/educations').get(educationCtrl.list)
router.param('educationId', educationCtrl.educationByID)
router.route('/api/educations/:educationId').get(educationCtrl.read)
router.route('/api/educations/:educationId').put(educationCtrl.update)
router.route('/api/educations/:educationId').delete(educationCtrl.remove)
router.route('/api/educations').delete(educationCtrl.removeAll)
export default router