import Component from '@ember/component';
import { computed } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  value: '',

  options: computed(function() {
    return {
      values: [
        { key: 'test', value: 'Test', email: 'getstarted@zurb.com' },
        { key: 'jxhui', value: 'Jimmy', email: 'getstarted+riley@zurb.com' }
      ]
    };
  }),

  actions: {
    updateValue: function(val) {
      $('.CodeMirror textarea').val(val);
      this.set('value', val);
    },
    tributeReplaced2: function(event) {
      // console.log('trib replaced', event);

      // blur this textarea to force simplemde to process the text
      $('.ember-text-area').blur();
    }
  }
});
