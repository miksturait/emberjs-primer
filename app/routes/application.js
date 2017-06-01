import Ember from 'ember';

export default Ember.Route.extend({
  // beforeModel() {
  //   let todos = [{
  //         name: 'a',
  //         done: false
  //       },
  //       {
  //         name: 'b',
  //         done: false
  //       },
  //       {
  //         name: 'c',
  //         done: false
  //       },
  //     ];
  //     todos.forEach( todo => this.store.createRecord('todo', todo).save() );
  // },

  model() {
    return this.store.findAll('todo');
  }
});
