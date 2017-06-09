import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  classNames: 'pone',
  classNameBindings: ['color'],

  color: computed('status', function () {
    if (this.get('status') > 0) {
      return 'black'
    } else {
      return 'white'
    }
  })
});
