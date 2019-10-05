import Idea from '../models/idea'

export const allIdeas = async (req, res) => {
    try {
        const ideas = await Idea.find({});
        res.status(200).json(ideas)
    } catch (err) {
        res.send(err)
    }
};

export const showIdea = async (req, res) => {
    try {
        console.log("here", req.params)
        const idea = await Idea.findOne({_id: req.params.id});
        if (idea) {
            res.status(200).json(idea)
        } else {
            res.status(404).json({error: 'Not Found'})
        }
    } catch (error) {
        res.status(400).json({error})
    }
};

export const createIdeas = async (req, res) => {
    try {
        const idea = await Idea.create({
            title: req.body.title,
            body: req.body.body
        });
        res.send(JSON.stringify(idea))
    } catch (err) {
        res.send(err)
    }
};

export const updateIdeas = async (req, res) => {
    try {
        const idea = await Idea.findOneAndUpdate({_id: req.params.id}, {
            title: req.body.title,
            body: req.body.body
        });
        res.send(JSON.stringify(idea))
    } catch (err) {
        res.send(err)
    }
}

export const deleteIdea = async (req, res) => {
    try {
        const idea = await Idea.findOne({_id: req.params.id});
        if (idea) {
            idea.remove()
            res.send(JSON.stringify(idea))
        }
    } catch (err) {
        res.send(err)
    }
}