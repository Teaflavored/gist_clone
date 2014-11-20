window.Gist.Views.gistShow = Backbone.View.extend({
  template: JST["gists/show"],

  events: {
    "click span.glyphicon": "toggleFavorite"
  },

  toggleFavorite: function(event){
    var favoriteButton = $(event.currentTarget)
    var gistId = favoriteButton.data("gist-id")
    var gist = Gist.gists.getOrFetch(gistId)
    var favorite = new Gist.Models.Favorite({
      gist: gist
    })

    if (favoriteButton.hasClass("favorited")){
      favorite.set({id: 0})
      favorite.destroy({
        success: function(){
          favoriteButton.removeClass("favorited")
          favoriteButton.addClass("unfavorited")
        }
      })
    } else {
      favorite.save({},{
        success: function(){
          favoriteButton.addClass("favorited")
          favoriteButton.removeClass("unfavorited")
        }
      })
    }

  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
  },

  render: function(){
    var renderedContent = this.template({
      gist: this.model
    })

    this.$el.html(renderedContent)

    return this;
  }
})
