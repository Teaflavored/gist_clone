json.extract!(note, :id, :title, :user_id)
favorite = Favorite.find_by(note_id: note)
json.favorite favorite
