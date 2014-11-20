window.Gist.Collections.Gists = Backbone.Collection.extend({
  url: "/notes",
  model: window.Gist.Models.Gist,
  getOrFetch: function(id){
    var gist = Gist.gists.get(id)
    if(gist){
      return gist;
    } else {
      gist = new window.Gist.Models.Gist({id: id})
      gist.fetch({
        success: function(){
          Gist.gists.add(gist)
        }
      });
    }
    return gist
  }
})

window.Gist.gists = new window.Gist.Collections.Gists();
