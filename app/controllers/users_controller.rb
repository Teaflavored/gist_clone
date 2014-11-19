class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      redirect_to root_url
    else
      render json: @user.errors
    end
  end

  def show
    @user = User.find(params[:id])
    render @user
  end



  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
