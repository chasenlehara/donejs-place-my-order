import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './profile.less!';
import template from './profile.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the pmo-profile component'
    }
  }
});

export default Component.extend({
  tag: 'pmo-profile',
  viewModel: ViewModel,
  template: template,
  events: {
    inserted: function() {
      if (console && console.timeStamp) {
        console.timeStamp('Profile component inserted');
      }
    }
  }
});
