const db = require('../../data/dbConfig')

module.exports = {
    find() {
        return db('resources')
    },

    findById(id) {
        return db('resources')
        .where({id})
    },

    getProjectsByResourceId(id) {
        return db
        .select(
            'rp.id', 'rp.resource_id', 'rp.project_id',
            'p.name as projectName', 'p.description as projectDescription', 'p.completed',
            'r.name as resourceName', 'r.description as resourceDescription'
        )
        .from('resources-projects as rp')
        .where({resource_id: id})
        .join('resources as r', 'r.id', 'rp.resource_id')
        .join('projects as p', 'p.id', 'rp.project_id')
    },

    insert(resource) {
        return db('resources')
        .insert(resource)
        .then(_ => this.find())
        .then(resources => resources.slice(-1)[0])
    },

    update(id, changes) {
        return db('resources')
        .update(changes)
        .where('id', id)
        .then(_ => this.findById(id)
            .then(([updatedResource]) => ({
                before: changes,
                after: updatedResource
            }))
        )
    },

    delete(id) {
        return db('resources')
        .delete()
        .where({id})
    }
}