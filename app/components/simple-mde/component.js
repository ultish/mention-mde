import SimpleMDE from 'ember-simplemde/components/simple-mde';
import $ from 'jquery';

export default SimpleMDE.extend({
  didInsertElement: function() {
    this._super();

    const editor = this.get('currentEditor');

    // on keydown, call through to Tribute's keydown
    editor.codemirror.on('keydown', () => {
      const ta = this.get('element');
      if (ta.boundKeydown) {
        // this sets up commandEvent for keyup later
        ta.boundKeydown($.Event('keydown'));
      }
    });

    // on keyup, call through to Tribute's keyup
    editor.codemirror.on('keyup', () => {
      const ta = this.get('element');
      if (ta.boundKeyup) {
        // need to set tribute instance commandEvent to true!!!
        ta.boundKeyup($.Event('keyup'));
      }
    });
  }
});
