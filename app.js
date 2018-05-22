

(function() {

//Model

let Task = Backbone.Model.extend({
    defaults: {
        title : "test title",
        completed: false
    }
});

let task = new Task();

task.set('title', 'changed title')
console.log(task.get('title'));

})();
