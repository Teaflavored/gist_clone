class RootsController < ApplicationController
  before_action :redirect_to_sign_in_if_not_logged_in


  def root
    render :root
  end
end
