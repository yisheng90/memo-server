import Idea from '../models/idea'
import {
	getFormattedIdeaResponse,
	getFormattedIdeaCreatedRespose,
} from '../helpers/idea_helpers'

export const allIdeas = async (req, res) => {
	try {
		const ideas = await Idea.find({})
		const response = ideas.map(idea => getFormattedIdeaResponse(idea))

		res.status(200).json(response)
	} catch (err) {
		res.status(500).json(err)
	}
}

export const showIdea = async (req, res) => {
	try {
		const idea = await Idea.findOne({ _id: req.params.id })

		if (idea) {
			return res.status(200).json(getFormattedIdeaResponse(idea))
		}

		res.status(404).json({ error: 'Not Found' })
	} catch (error) {
		res.status(400).json({ error })
	}
}

export const createIdeas = async (req, res) => {
	try {
		const idea = await Idea.create({
			title: req.body.title,
			body: req.body.body,
		})

		res.status(200).json(getFormattedIdeaCreatedRespose(idea))
	} catch (err) {
		res.status(500).json(err)
	}
}

export const updateIdeas = async (req, res) => {
	try {
		await Idea.findOneAndUpdate(
			{ _id: req.params.id },
			{
				title: req.body.title,
				body: req.body.body,
			}
		)

		return res.status(200).json({ success: true })
	} catch (err) {
		res.status(500).json(err)
	}
}

export const deleteIdea = async (req, res) => {
	try {
		const idea = await Idea.findOne({ _id: req.params.id })

		if (idea) {
			idea.remove()
			return res.status(200).json({ success: true })
		}

		res.status(404).json({ error: 'Not Found' })
	} catch (err) {
		res.status(500).json(err)
	}
}
