import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['person-tags'],

  tags: computed(function() {
    return this.get('person.tags').map(t => t.name);
  })
});
