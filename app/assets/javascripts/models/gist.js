window.Gist.Models.Gist = Backbone.Model.extend({
  urlRoot: "/notes",

  parse: function(resp){
    this._favorite = resp.favorite
    delete resp.favorite
    return resp
  }
})
