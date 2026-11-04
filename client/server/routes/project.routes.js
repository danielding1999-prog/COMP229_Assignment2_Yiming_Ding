import express from 'express'
import projectCtrl from '../controller/Project.controller.js'
import authCtrl from '../controller/auth.controller.js'
const router = express.Router()
router.route('/api/projects')
  .post(projectCtrl.create)
.get(projectCtrl.list)
.delete(authCtrl.requireSignin, projectCtrl.removeAll)

router.route('/api/projects/:projectId')
  .get(projectCtrl.read)
  .put(authCtrl.requireSignin, projectCtrl.update)
  .delete(authCtrl.requireSignin, projectCtrl.remove)
router.param('projectId', projectCtrl.projectByID)

export default router