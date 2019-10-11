const db = require('../../data/dbConfig')

module.exports = {
    find() {
        return db('projects')
    },

    findById(id) {
        return db('projects')
        .where({id})
    },

    getTaks(id) {

    },

    getResources() {

    },
    
    getResourcesById(projectId) {

    },
    
    insert(project) {
        return db('projects')
        .insert(project)
        .then(_ => this.find())
        .then(projects => projects.slice(-1)[0])
    },

    update(id, changes) {
        return db('projects')
        .update(changes)
        .where('id', id)
        .then(_ => this.findById(id)
            .then(([updatedProject]) => ({
                before: changes,
                after: updatedProject
            }))
        )
    },

    delete(id) {
        return db('projects')
        .delete()
        .where({id})
    }
}