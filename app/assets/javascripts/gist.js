window.Gist = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(){
    new window.Gist.Routers.appRouter({
      $rootEl: $("div#main"),
      $sideBarEl: $("div#sidebar")
      });
    Backbone.history.start();
  }
}
