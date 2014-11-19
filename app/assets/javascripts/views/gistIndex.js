window.Gist.Views.gistIndex = Backbone.View.extend({
  template: JST["gists/index"],

  initialize: function(options){
    this.listenTo(this.collection, "sync", this.render)
  },

  refresh: function(){
    this.collection.fetch();
  },

  render: function(){
    var renderedContent = this.template({
      gists: this.collection
    })
    this.$el.html(renderedContent)

    return this;
  }
})
