import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    this.set('item.done', true);
    this.item.save();
  }
});
