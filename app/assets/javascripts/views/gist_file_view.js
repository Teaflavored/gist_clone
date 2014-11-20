window.Gist.Views.GistFileView = Backbone.View.extend({
  
  initialize: function(options){
    this.listenTo(this.model, "sync", this.render)
  },

  template: JST["gist_files/show"],

  render: function(){
    var renderedContent = this.template({
      gistFile: this.model
    })

    this.$el.html(renderedContent)

    return this
  }
})
