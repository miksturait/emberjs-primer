import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['forAll'],
  classNameBindings: ['item.done:green', 'itIsLong'],
  attributeBindings: ['draggable'],

  itIsLong: Ember.computed('item.name', function () {
    let length = this.get('item.name').length;

    if (length < 5) {
      return 'short';
    } else if (length < 10) {
      return 'so-so';
    } else {
      return 'its-big';
    }
  }),

  draggable: 'true',

  dragOver() {
    return false;
  },

  dragEnd() {
    this.get('drop')(this.item);
  }
});
