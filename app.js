

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
    template: _.template("<%- title %>"),
    render: function() {
        let template = this.template( this.model.toJSON() )
        this.$el.html(template)
        return this
    }
})
let taskView = new TaskView({ model: task})

console.log(taskView.render().el);

})();
