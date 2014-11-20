window.Gist.Routers.appRouter = Backbone.Router.extend({
  routes: {
    "" : "gistIndexView",
    "gists/new": "gistNewView",
    "gists/:id": "gistShowView"
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl
    this.$sideBarEl = options.$sideBarEl
    this.gistIndexView()
  },

  gistShowView: function(id){
    var gist = Gist.gists.getOrFetch(id);
    var showView = new window.Gist.Views.gistShow({
      model: gist
    })

    this.$rootEl.html(showView.render().$el)
  },

  gistIndexView: function(){
    var indexView = new window.Gist.Views.gistIndex({
      collection: Gist.gists
    })

    this.$sideBarEl.html(indexView.render().$el)

    Gist.gists.fetch()
  },

  gistNewView: function(){
    var gist = new window.Gist.Models.Gist();
    var newView = new window.Gist.Views.GistForm({
      model: gist
    })

    this.$rootEl.html(newView.render().$el)
  }
})
