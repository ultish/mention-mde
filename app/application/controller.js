import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  options: computed(function() {
    let values = [];

    values.push({ key: 'jxhui', value: 'Jimmy' });
    for (let i = 0; i < 400; i++) {
      values.push({ key: 'test' + i, value: 'test' + i });
    }

    return {
      values: values
    };
  })
});
