import Ember from 'ember';

export default Ember.View.extend({
    didInsertElement: function() {
        Ember.$('.parent').on({
            'click': function(e) {
                e.preventDefault();
                Ember.$(this).toggleClass('open');
            },
            'mouseenter': function() {
                if (!Ember.$(this).hasClass('open')) {
                    Ember.$(this).addClass('open');
                }
            },
            'mouseleave': function() {
                if (Ember.$(this).hasClass('open')) {
                    Ember.$(this).removeClass('open');
                }
            }
        });
    }
});
