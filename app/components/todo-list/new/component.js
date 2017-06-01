import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),

    actions: {
        add() {
            let name = this.get('newTodoName');
            this.get('store').createRecord('todo', {name, done: false, createdAt: new Date()}).save();

            this.set('newTodoName', '');
        }
    }
});
