require 'spec_helper'

describe "posts/new", :type => :view do
  before(:each) do
    assign(:post, Post.new(
      :title => "MyString",
      :info => "MyString",
      :video => "MyString",
      :image => "MyString",
      :link => "MyString"
    ))
  end

  it "renders new post form" do
    render

    assert_select "form[action=?][method=?]", posts_path, "post" do

      assert_select "input#post_title[name=?]", "post[title]"

      assert_select "input#post_info[name=?]", "post[info]"

      assert_select "input#post_video[name=?]", "post[video]"

      assert_select "input#post_image[name=?]", "post[image]"

      assert_select "input#post_link[name=?]", "post[link]"
    end
  end
end
