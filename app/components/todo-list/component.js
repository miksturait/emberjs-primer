import Ember from 'ember';

export default Ember.Component.extend({
    sortBy: ['done:asc', 'name:asc'],
    sortedTodos: Ember.computed.sort('todos', 'sortBy'),

    actions: {
        deleteTodo(todo) {
            this.todos.removeObject(todo);
        }    }
});
