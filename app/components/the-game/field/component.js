import Ember from 'ember';

export default Ember.Component.extend({
    game: Ember.inject.service('game'),
    classNames: 'field',
    classNameBindings: ['over', 'focus'],

    dragOver() {
        this.set('over', true);
    },

    dragLeave() {
        this.set('over', false)
    },
    
    mouseEnter() {
        this.set('focus', true)
    },
    mouseLeave() {
        this.set('focus', false)
    }
});
