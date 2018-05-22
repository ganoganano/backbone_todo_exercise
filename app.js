(function() {

    let Task = Backbone.Model.extend({})
    let Tasks = Backbone.Collection.extend({model: Task})

    let TaskView = Backbone.View.extend({})
    let TasksView = Backbone.View.extend({})

    let tasks = new Tasks([
        {
            title: 'task1',
            complted: true
        },
        {
            title: 'task2'
        },
        {
            title: 'task3'
        }
    ])
})();
