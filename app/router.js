import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('buttons');
    this.route('forms');
    this.route('responsive');
    this.route('menus');
    this.route('menus');
    this.route('tables');
});

export default Router;
