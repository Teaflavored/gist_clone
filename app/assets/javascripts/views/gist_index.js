window.Gist.Views.gistIndex = Backbone.View.extend({
  template: JST["gists/index"],

  initialize: function(options){
    this.listenTo(this.collection, "sync add remove change:title", this.render)
  },

  render: function(){
    var renderedContent = this.template({
      gists: this.collection
    })
    this.$el.html(renderedContent)

    return this;
  }
})
