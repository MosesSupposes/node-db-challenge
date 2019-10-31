const db = require('../../data/dbConfig')

module.exports = {
    find() {
        return db('tasks')
    },

    findById(id) {
        return db('tasks')
        .where({id})
    },

    insert(task) {
        return db('tasks')
        .insert(task)
        .then(_ => this.find())
        .then(tasks => tasks.slice(-1)[0])
    },

    update(id, changes) {
        return db('tasks')
        .update(changes)
        .where('id', id)
        .then(_ => this.findById(id)
            .then(([updatedTask]) => ({
                before: changes,
                after: updatedTask
            }))
        )
    },

    delete(id) {
        return db('tasks')
        .delete()
        .where({id})
    }
}