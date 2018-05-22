(function() {

    let Task = Backbone.Model.extend({
        defaults:{
            title: 'something',
            completed: false
        }
    })
    let Tasks = Backbone.Collection.extend({model: Task})

    let TaskView = Backbone.View.extend({
        tagName: 'li',
        tempalte: _.template( $('#task-template').html() ),
        render: function() {
            let template = this.tempalte(this,model.toJSON())
            this.$el.html(template)
            return this
        }
    })
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
