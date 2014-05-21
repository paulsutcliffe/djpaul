require 'spec_helper'

describe "posts/edit", :type => :view do
  before(:each) do
    @post = assign(:post, Post.create!(
      :title => "MyString",
      :info => "MyString",
      :video => "MyString",
      :image => "MyString",
      :link => "MyString"
    ))
  end

  it "renders the edit post form" do
    render

    assert_select "form[action=?][method=?]", post_path(@post), "post" do

      assert_select "input#post_title[name=?]", "post[title]"

      assert_select "input#post_info[name=?]", "post[info]"

      assert_select "input#post_video[name=?]", "post[video]"

      assert_select "input#post_image[name=?]", "post[image]"

      assert_select "input#post_link[name=?]", "post[link]"
    end
  end
end
