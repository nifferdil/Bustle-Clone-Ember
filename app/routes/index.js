import Ember from 'ember';

var articles = [{
  id: 1,
  title: "New Tomster Doll!",
  image: "img/doll.jpeg",
  content: "loremimpsum"
}, {
  id: 2,
  title: "Tomster goes to London",
  image: "img/tomster_london.jpeg",
  content: "loremimpsum in London"
} , {
  id: 3,
  title: "Tomster went through puberty!",
  image: "img/tomster_stache.jpeg",
  content: "loremimpsum grew a mustache!"
}];

export default Ember.Route.extend({
  model() {
    return articles;
  },
});
