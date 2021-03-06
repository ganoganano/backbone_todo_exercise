(function() {

    let Task = Backbone.Model.extend({
        defaults:{
            title: 'something',
            completed: false
        },
        validate: function(attrs) {
            if (_.isEmpty(attrs.title))  {
                return 'title must not be empty'
            }
        },
        initialize: function() {
            this.on('invalid', (model, error) => {
                $('#error').html(error)
            })
        }
    })
    let Tasks = Backbone.Collection.extend({model: Task})

    let TaskView = Backbone.View.extend({
        tagName: 'li',
        initialize: function(){
            this.model.on('destroy', this.remove, this)
            this.model.on('change', this.render, this)
        },
        events: {
            "click .delete": "destroy",
            "click .toggle": 'toggle'
        },
        destroy: function(){
            if(confirm('are you sure?')){
                this.model.destroy()
            }
        },
        toggle: function(){
            this.model.set('completed', !this.model.get('completed') )
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
        initialize: function() {
            this.collection.on('add', this.addNew, this)
            this.collection.on('change', this.updateCount, this)
            this.collection.on('destroy', this.updateCount, this)
        },
        addNew: function(task) {
            let taskView = new TaskView({model: task})
            this.$el.append(taskView.render().el)
            $('#title').val('').focus()
            this.updateCount()
        },
        updateCount: function() {
            let uncompleted = this.collection.filter((task)=>{
                return !task.get('completed')
            })
            $('#count').html(uncompleted.length)
        },
        render: function(){
            this.collection.each((task)=>{
            let taskView = new TaskView({model: task})
            this.$el.append(taskView.render().el)
            })
            this.updateCount()
            return this
        }
    })

    let AddTaskView = Backbone.View.extend({
        el: "#addTask",
        events: {
            'submit': 'submit'
        },
        submit: function(e){
            e.preventDefault()
            let task = new Task()
            if(task.set({title: $('#title').val()}, {validate: true})){
                this.collection.add(task)
                $('#error').empty()
            }
        }
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
    let addTaskView = new AddTaskView({collection: tasks})
    $('#tasks').html(tasksView.render().el)
})();
