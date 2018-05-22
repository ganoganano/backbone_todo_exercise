

(function() {

//Model

let Task = Backbone.Model.extend({
    defaults: {
        title : "title",
        completed: false
    },
    validate: function(attr) {
        if(_.isEmpty(attr.title)) {
            return "title must not be empty."
        }
    },
    toggle: function() {
        this.set('completed', !this.get('completed'))
    }
});

let task1 = new Task();

console.log(task1.toJSON());
task1.toggle();
console.log(task1.toJSON());

task1.set({title: ''}, {validate: true})

console.log(task1.toJSON());

})();
