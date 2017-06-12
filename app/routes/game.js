import Ember from 'ember';

export default Ember.Route.extend({
  game: Ember.inject.service(),
  model() {
    return this.get('game').fields;
  },

  actions: {
    activate(pone, { target: { field }}) {
      this.get('game').move(pone, field);
    }
  }
});
