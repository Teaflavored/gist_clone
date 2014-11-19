window.Gist.Routers.appRouter = Backbone.Router.extend({
  routes: {
    "" : "gistIndexView"
  },

  gistIndexView: function(){
    var gists = new window.Gist.Collections.Gists();
    var indexView = new window.Gist.Views.gistIndex({
      collection: gists
    })

    $("div#main").html(indexView.render().$el)

    indexView.refresh();
  }
})
