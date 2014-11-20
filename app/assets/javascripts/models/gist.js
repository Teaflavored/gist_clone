window.Gist.Models.Gist = Backbone.Model.extend({
  urlRoot: "/notes",

  gistFiles: function(){
    if(this._gist_files === undefined){
      this._gist_files = new Gist.Collections.GistFiles([], { gist: this} )
    }

    return this._gist_files
  },

  parse: function(resp){
    this._favorite = resp.favorite
    delete resp.favorite

    if(resp.gistFiles){
      this.gistFiles().set(resp.gistFiles)
      delete resp.gistFiles
    }

    return resp
  }
})
