const express = require('express')
const ResourcesModel = require('../models/ResourcesModel')
const { withCatch } = require('../../util')

const router = express.Router()

router.get('/', async (req, res) => {
    const [err, resources] = await withCatch( ResourcesModel.find() )

    if (err) res.status(404).json({error: "There are no resources stored in the database yet."})
    else if (!Object.keys(resources).length) res.status(404).json({error: "There are no resources stored in the database yet."})
    else res.status(200).json(resources)
})

router.get('/:id', async (req, res) => {
    const [err, resource] = await withCatch( ResourcesModel.findById(req.params.id) )

    if (err) res.status(404).json({error: "Couldn't find the resource with the specified Id."})
    else if (!Object.keys(resource).length) res.status(404).json({error: "Couldn't find the resource with the specified Id."})
    else res.status(200).json(resource[0])
})

router.get('/projects', async (req, res) => {
    
})

router.get('/:id/projects', async (req, res) => {

})

router.post('/', async (req, res) => {
    const [err, newResource] = await withCatch( ResourcesModel.insert(req.body)  )

    if (err) res.status(500).json({error: "There was a problem when adding the resource to the database."})
    else res.status(200).json(newResource)
})

router.put('/:id', async (req, res) => {
    const [err, updatedResource] = await withCatch( ResourcesModel.update(req.params.id, req.body) )

    if (err) res.status(500).json({error: "There was a problem when updating the resource with the specified Id."})
    else res.status(200).json(updatedResource)
})

router.delete('/:id', async (req, res) => {
    const [err, _] = await withCatch( ResourcesModel.delete(req.params.id) )

    if (err) res.status(500).json({error: "Couldn't delete the resource with the specified Id."})
    else res.status(200).json({success: "Deleted the resource with the specified Id."})
})

module.exports = router