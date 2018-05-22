

(function() {

//Model

let Task = Backbone.Model.extend({
    defaults: {
        title : "test title",
        completed: false
    }
});

let task = new Task();


})();
