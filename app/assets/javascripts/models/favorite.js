window.Gist.Models.Favorite = Backbone.Model.extend({

  url: function(){
    return "/notes/" + this.gist.id + "/favorite"
  },

  initialize: function(options){
    this.gist = options.gist
  }
})
