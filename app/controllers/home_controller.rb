class HomeController < ApplicationController
  def index
    @categories = Category.all
    @posts = Post.all
    @message = Message.new
  end
end
