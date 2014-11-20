class FavoritesController < ApplicationController
  def index
    @favorite_notes = current_user.favorite_notes
    render :index
  end

  def create
    @note = Note.find(params[:note_id])
    if @note.favorites.create(user_id: current_user.id)
      render json: @note
    else
      render json: ["error favoriting"]
    end

  end

  def destroy
    @note = Note.find(params[:note_id])
    @favorite = Favorite.find_by(user_id: current_user.id, note_id: @note.id)
    @favorite.destroy!
    render json: @note
  end

end
