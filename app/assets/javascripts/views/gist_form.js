window.Gist.Views.GistForm = Backbone.View.extend({
  template: JST["gists/new"],

  events: {
    "submit form": "createGist"
  },
  createGist: function(event){
    event.preventDefault()
    gistParams = $(event.currentTarget).serializeJSON()
    this.model.set(gistParams)
    this.model.save({},{
      success: function(){
        Gist.gists.add(this.model)
        Backbone.history.navigate("/#/gists/" + this.model.id, {trigger: true})
      }.bind(this),
      error: function(){

      }.bind(this)
    })
  },
  render: function(){
    var renderedContent = this.template({
      gist: this.model
    })

    this.$el.html(renderedContent)

    return this;
  }
})
