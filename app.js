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
        initialize: function(){
            this.model.on('destroy', this.remove, this)
        },
        events: {
            "click .delete": "destroy"
        },
        destroy: function(){
            if(confirm('are you sure?')){
                this.model.destroy()
            }
        },
        remove: function(){
            this.$el.remove();
        },
        tempalte: _.template( $('#task-template').html() ),
        render: function() {
            let template = this.tempalte(this.model.toJSON())
            this.$el.html(template)
            return this
        }
    })
    let TasksView = Backbone.View.extend({
        tagName: 'ul',
        render: function(){
            this.collection.each((task)=>{
            let taskView = new TaskView({model: task})
            this.$el.append(taskView.render().el)
            })
            return this
        }
    })

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

    let tasksView = new TasksView({collection: tasks})
    $('#tasks').html(tasksView.render().el)
})();
