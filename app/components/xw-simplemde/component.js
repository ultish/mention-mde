import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  value: '',

  actions: {
    tributeReplaced2: function() {
      // blur this textarea to force simplemde to process the text
      $('.ember-text-area').blur();
    }
  }
});
