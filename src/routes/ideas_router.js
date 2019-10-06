import express from 'express'

import { allIdeas, createIdeas } from '../controllers/idea_controller'

const router = express.Router({ mergeParams: true })

router.get('/', allIdeas)
router.post('/', createIdeas)

export default router
