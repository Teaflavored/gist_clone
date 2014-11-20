json.extract!(note, :id, :title, :user_id)
favorite = Favorite.find_by(note_id: note)
json.favorite favorite

gist_files ||= nil
if(gist_files)
  json.gistFiles(gist_files) do |gist_file|
    json.partial!("gist_files/gist_file", gist_file: gist_file)
  end
end
