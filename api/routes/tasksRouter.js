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
    const [err, [task]] = await withCatch( TasksModel.findById(req.params.id) )

    if (err) res.status(404).json({error: "Couldn't find the task with the specified Id."})
    else if (!Object.keys(tasks).length) res.status(404).json({error: "Couldn't find the task with the specified Id."})
    else res.status(200).json(task)
})

router.post('/', async (req, res) => {

})

router.put('/:id', async (req, res) => {

})

router.delete('/:id', async (req, res) => {

})

module.exports = router