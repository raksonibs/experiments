class FollowersController < ApplicationController
  def random
    render json: User.where(["id !=?", current_user.id]).order("random()").all
  end

  def create
    follower = Follower.create(user_id: params[:user_id], followed_by: current_user.id)

    redner json: follower
  end
end
