import express from 'express'

import {allIdeas, showIdea, createIdeas, updateIdeas, deleteIdea} from "../controllers/idea_controller";

const router = express.Router({mergeParams: true});

router.get('/', allIdeas);
router.post('/', createIdeas);

router.get('/:id', showIdea);
router.put('/:id', updateIdeas);
router.delete('/:id', deleteIdea);

export default router