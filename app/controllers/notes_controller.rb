class NotesController < ApplicationController
  before_action :redirect_to_sign_in_if_not_logged_in

  def index
    @notes = current_user.notes
    render :index
  end

  def show
    @note = Note.find(params[:id])
    render :show
  end

  def create
    @note = Note.new(note_params)
    @note.user_id = current_user.id
    if @note.save
      render :show
    else
      render @note.errors.full_messages, status: 422
    end
  end


  private

  def note_params
    params.require(:note).permit(:title)
  end
end
