import Ember from 'ember';

export default Ember.Component.extend({
    classNames: 'field',
    classNameBindings: ['field.over', 'field.focus'],

    dragOver() {
        this.set('field.over', true);
    },

    dragLeave() {
        this.set('field.over', false);
    },
    
    mouseEnter() {
        this.set('field.focus', true)
    },
    mouseLeave() {
        this.set('field.focus', false)
    }
});
