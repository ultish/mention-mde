import SimpleMDE from 'ember-simplemde/components/simple-mde';
import $ from 'jquery';

export default SimpleMDE.extend({
  didInsertElement: function() {
    this._super();

    console.log('super', this.get('currentEditor'));
    const editor = this.get('currentEditor');

    // on keydown, call through to Tribute's keydown
    editor.codemirror.on('keydown', (val, e) => {
      console.log('keydown', val, e, event);
      const ta = $('.ember-text-area')[0];
      if (ta.boundKeydown) {
        // this sets up commandEvent for keyup later
        ta.boundKeydown($.Event('keydown'));
      }
    });

    // on keyup, call through to Tribute's keyup
    editor.codemirror.on('keyup', (val, e) => {
      console.log('keyup', val, e, event);
      const ta = $('.ember-text-area')[0];
      if (ta.boundKeyup) {
        // need to set tribute instance commandEvent to true!!!
        ta.boundKeyup($.Event('keyup'));
      }
    });
  }
});
