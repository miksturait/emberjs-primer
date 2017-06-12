import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.findAll('todo').forEach( t => {t.deleteRecord(); t.save();});
    return this.store.findAll('todo');
  }
});
