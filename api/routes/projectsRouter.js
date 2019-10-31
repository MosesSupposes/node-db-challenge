const express = require('express')
const ProjectsModel = require('../models/ProjectsModel')
const { withCatch } = require('../../util')

const router = express.Router()

router.get('/', async (req, res) => {
    const [err, projects] = await withCatch( ProjectsModel.find() )

    if (err) res.status(404).json({error: "There are no projects stored in the database yet."})
    else if (!Object.keys(projects).length) res.status(404).json({error: "There are no projects stored in the database yet."})
    else res.status(200).json(projects)
})

router.get('/:id', async (req, res) => {
    const [err, project] = await withCatch( ProjectsModel.findById(req.params.id) )

    if (err) res.status(404).json({error: "Couldn't find the project with the specified Id."})
    else if (!Object.keys(project).length) res.status(404).json({error: "Couldn't find the project with the specified Id."})
    else res.status(200).json(project[0])
})

router.get('/:id/tasksAndResources', async (req, res) => {
    const [err, project] = await withCatch( ProjectsModel.findById(req.params.id) )

    if (err) res.status(404).json({error: "Couldn't find the project with the specified Id."})
    else if (!Object.keys(project).length) res.status(404).json({error: "Couldn't find the project with the specified Id."})
    else {
        const [err, tasks] = await withCatch( ProjectsModel.getTaks(req.params.id) )
        if (err) res.status(404).json({
            error: "Couldn't find the tasks for the project with the specified Id.",
            project: project[0]
        })
        else if (!Object.keys(tasks).length) res.status(404).json({
            error: "Couldn't find the tasks for the project with the specified Id.",
            project: project[0]
        })
        else {
            project[0].tasks = tasks
            const [err, resources] = await withCatch( ProjectsModel.getResources(req.params.id) )
            // Send a successful payload with just the tasks
            if (err) res.status(200).json(project[0])
            else {
                project[0].resources = resources
                res.status(200).json(project[0])
            }
        }
    }
})

router.post('/', async (req, res) => {
    const [err, newProject] = await withCatch( ProjectsModel.insert(req.body)  )

    if (err) res.status(500).json({error: "There was a problem when adding the project to the database."})
    else res.status(200).json(newProject)
})

router.put('/:id', async (req, res) => {
    const [err, updatedProject] = await withCatch( ProjectsModel.update(req.params.id, req.body) )

    if (err) res.status(500).json({error: "There was a problem when updating the project with the specified Id."})
    else res.status(200).json(updatedProject)
})

router.delete('/:id', async (req, res) => {
    const [err, _] = await withCatch( ProjectsModel.delete(req.params.id) )

    if (err) res.status(500).json({error: "Couldn't delete the project with the specified Id."})
    else res.status(200).json({success: "Deleted the project with the specified Id."})
})

module.exports = router