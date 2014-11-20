window.Gist.Routers.appRouter = Backbone.Router.extend({
  routes: {
    "gists/:gist_id/gist_files/:id": "showGistFile",
    "gists/new": "gistNewView",
    "gists/:id": "gistShowView"
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl
    this.$sideBarEl = options.$sideBarEl
    this.gistIndexView()
  },

  showGistFile: function(gist_id, id){

    var gist = Gist.gists.getOrFetch(gist_id)
    var gistFile = gist.gistFiles().getOrFetch(id)

    var gistFileView = new window.Gist.Views.GistFileView({
      model: gistFile
    })

    this.$rootEl.html(gistFileView.render().$el)
    gistFile.fetch();
  },

  gistShowView: function(id){
    var gist = Gist.gists.getOrFetch(id);
    var showView = new window.Gist.Views.gistShow({
      model: gist
    })

    this.$rootEl.html(showView.render().$el)
    gist.fetch()
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
