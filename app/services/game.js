import Ember from 'ember';

export default Ember.Service.extend({
  fields: null,

  init() {
    this._super(...arguments);
    this.set('fields', this._init_fields());
  },

  move(from_field, to_field) {
      to_field.setField(from_field.status);

      from_field.setField(0);
  },

  _init_fields() {
    return [
      [0, -1, 0, -1, 0, -1, 0, -1],
      [-1, 0, -1, 0, -1, 0, -1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0]
    ].map(function (row) {
      return row.map(function (value) {
        return {
          status: value,
          setField(value) {
            Ember.setProperties(this, {
              status: value,
              focus: false,
              over: false
            });
          }
        }
      });
    });
  }
});
