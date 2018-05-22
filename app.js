

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
console.log(tasks.toJSON());


})();
