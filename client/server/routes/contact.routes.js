import express from 'express'
import contactCtrl from '../controller/Contact.controller.js'
const router = express.Router()
router.route('/api/contacts').post(contactCtrl.create)
router.route('/api/contacts').get(contactCtrl.list)
router.param('contactId', contactCtrl.contactByID)
router.route('/api/contacts/:contactId').get(contactCtrl.read)
router.route('/api/contacts/:contactId').put(contactCtrl.update)
router.route('/api/contacts/:contactId').delete(contactCtrl.remove)
router.route('/api/contacts').delete(contactCtrl.removeAll)
export default router