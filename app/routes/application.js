import Route from '@ember/routing/route';


export default Route.extend({
  model() {
    const people = [];
    for (let i = 1, l = 100; i <= l; i++) {
      people.push({
        id: 1,
        name: `Person ${i}`,
        tags: [{
          id: i,
          name: `Tag ${i}`
        }]
      });
    }
    return people;
  },

  setupController(controller, model) {
    controller.set('people', model);
    controller.set('columns', [
      'person-name',
      'person-tags'
    ]);
  }
});
