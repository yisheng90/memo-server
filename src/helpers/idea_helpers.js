export const getFormattedIdeaResponse = ({ _id, createdAt, title, body }) => ({
	id: _id,
	created_date: createdAt,
	title,
	body,
})

export const getFormattedIdeaCreatedRespose = ({ _id, createdAt }) => ({
	id: _id,
	created_date: createdAt,
})
