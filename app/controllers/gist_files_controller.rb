class GistFilesController < ApplicationController

  def update
    @gist_file = GistFile.find(params[:id])
    if @gist_file.update(gist_file_params)
      render :show
    else
      render @gist_file.errors.full_messages, status: 422
    end
  end

  def create
    @gist_file = GistFile.new(gist_file_params)
    if @gist_file.save
      render :show
    else
      render @gist_file.errors.full_messages, status: 422
    end
  end

  def show
    @gist_file = GistFile.find(params[:id])
    render :show
  end

  def index
    @note = Note.find(params[:note_id])
    @gist_files = @note.gist_files
    render :index
  end

  private

  def gist_file_params
    params.require(:gist_file).permit(:name, :body, :gist_id)
  end
end
