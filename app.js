

(function() {

//Model

let Task = Backbone.Model.extend({
    defaults: {
        title : "title",
        completed: false
    }
});

let task = new Task();

// View

let TaskView = Backbone.View.extend({
    tagName: 'li',
    template: _.template( $('#task-template').html() ),
    render: function() {
        let template = this.template( this.model.toJSON() )
        this.$el.html(template)
        return this
    }
})

let TasksView = Backbone.View.extend({
    tagName: 'ui',
    render: function() {
        this.collection.each((task)=>{
            let taskView = new TaskView({model: task})
            this.$el.append(taskView.render().el)
        })
        return this
    }
})

// Collection

let Tasks = Backbone.Collection.extend({
    model: Task
})
let tasks = new Tasks([
    {
        title: 'task1',
        completed: true
    },
    {
        title: 'task2'
    },
    {
        title: 'task3'
    }
])

let tasksView = new TasksView({collection: tasks})
$('#tasks').html(tasksView.render().el)

})();
