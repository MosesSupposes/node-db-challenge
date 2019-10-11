const express = require('express')
const TasksModel = require('../models/TasksModel')
const { withCatch } = require('../../util')

const router = express.Router()

router.get('/', async (req, res) => {
    const [err, tasks] = await withCatch( TasksModel.find() )

    if (err) res.status(404).json({error: "There are no tasks stored in the database yet."})
    else if (!Object.keys(tasks).length) res.status(404).json({error: "There are no tasks stored in the database yet."})
    else res.status(200).json(tasks)
})

router.get('/:id', async (req, res) => {
    const [err, task] = await withCatch( TasksModel.findById(req.params.id) )

    if (err) res.status(404).json({error: "Couldn't find the task with the specified Id."})
    else if (!Object.keys(task).length) res.status(404).json({error: "Couldn't find the task with the specified Id."})
    else res.status(200).json(task[0])
})

router.post('/', async (req, res) => {
    const [err, task] = await withCatch ( TasksModel.insert(req.body) )

    if (err) res.status(500).json({error: "There was a problem when adding the task to the database."})
    else res.status(201).json(task)
})

router.put('/:id', async (req, res) => {
    const [err, task] = await withCatch ( TasksModel.update(req.params.id, req.body) )

    if (err) res.status(500).json({error: "There was a problem when updating the task with the specified Id."})
    else res.status(200).json(task)
})

router.delete('/:id', async (req, res) => {
    const [err, _] = await withCatch ( TasksModel.delete(req.params.id) )

    if (err) res.status(500).json({error: "Couldn't delete the task with the specified Id."})
    else res.status(200).json({success: "Deleted the task with specified Id."})
})

module.exports = router