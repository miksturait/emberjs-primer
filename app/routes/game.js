import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0]
    ].map(function(row) {
      return row.map(function(value) {
        return {status: value}
      });
    });
  },

  actions: {
    activate(pone, { target: { field }}) {
      Ember.set(pone, 'status', 0);
      Ember.set(field, 'status', 1);
    }
  }
});
