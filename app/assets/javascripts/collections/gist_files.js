window.Gist.Collections.GistFiles = Backbone.Collection.extend({
  url: function(){
    return "/notes/" + this.gist.id + "/gist_files"
  },

  model: window.Gist.Models.GistFile,

  initialize: function(options){
    this.gist = options.gist
  },

  getOrFetch: function(id){
    var gistFile = this.get(id)
    if(gistFile){
      gistFile.fetch()
      return gistFile
    } else {
      gistFile = new window.Gist.Models.GistFile({id: id})
      gistFile.fetch({
        success: function(){
          this.add(gistFile)
        }.bind(this)
      });
    }
    return gistFile
  }
})
