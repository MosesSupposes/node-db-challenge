const db = require('../../data/dbConfig')

module.exports = {
    find() {
        return db('resources')
    },

    findById(id) {
        return db('resources')
        .where({id})
    },

    getProjects() {

    },

    getProjectsById(id) {

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