import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  options: computed(function() {
    return {
      values: [
        { key: 'test', value: 'Test', email: 'getstarted@zurb.com' },
        { key: 'jxhui', value: 'Jimmy', email: 'getstarted+riley@zurb.com' }
      ]
    };
  })
});
