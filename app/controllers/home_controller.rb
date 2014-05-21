class HomeController < ApplicationController
  def index
    @categories = Category.all
    @category = Category.new
    @posts = Post.all
    @post = Post.new
  end
end
