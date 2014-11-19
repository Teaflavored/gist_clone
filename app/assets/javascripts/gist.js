window.Gist = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(){
    new window.Gist.Routers.appRouter();
    Backbone.history.start();
  }
}


$(Gist.initialize)
