window.Gist.Collections.Gists = Backbone.Collection.extend({
  url: "/notes",
  model: window.Gist.Models.Gist
})
