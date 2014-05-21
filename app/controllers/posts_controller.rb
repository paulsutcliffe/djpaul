class PostsController < InheritedResources::Base
  before_filter :authenticate_admin!
  skip_before_filter :verify_authenticity_token, :only => :create

  def permitted_params
    params.permit(:post => [:category_id, :title, :info, :video, :link, :image])
  end
end
