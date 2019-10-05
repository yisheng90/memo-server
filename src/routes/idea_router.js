import express from 'express'

import { showIdea, updateIdeas, deleteIdea } from '../controllers/idea_controller'

const router = express.Router({ mergeParams: true })

router.get('/:id', showIdea)
router.put('/:id', updateIdeas)
router.delete('/:id', deleteIdea)

export default router