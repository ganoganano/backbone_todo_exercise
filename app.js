

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
})
let taskView = new TaskView({ model: task})

console.log(taskView.el);

})();
