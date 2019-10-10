import mongoose from 'mongoose'

import { generateUuid } from '../helpers/uuid_helpers'

const ideaSchema = new mongoose.Schema(
	{
		_id: {
			type: String,
			default: generateUuid,
		},
		title: {
			type: String,
		},
		body: {
			type: String,
			maxlength: [140, 'Body must be less than 140 characters.'],
		},
	},
	{ timestamps: { createdAt: true } }
)

const Idea = mongoose.model('Idea', ideaSchema)

export default Idea
