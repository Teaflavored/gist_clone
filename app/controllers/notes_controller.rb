class NotesController < ApplicationController
  before_action :redirect_to_sign_in_if_not_logged_in

  def index
    @notes = current_user.notes
    render :index
  end
end
