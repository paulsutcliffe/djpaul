require 'spec_helper'

describe "posts/index", :type => :view do
  before(:each) do
    assign(:posts, [
      Post.create!(
        :title => "Title",
        :info => "Info",
        :video => "Video",
        :image => "Image",
        :link => "Link"
      ),
      Post.create!(
        :title => "Title",
        :info => "Info",
        :video => "Video",
        :image => "Image",
        :link => "Link"
      )
    ])
  end

  it "renders a list of posts" do
    render
    assert_select "tr>td", :text => "Title".to_s, :count => 2
    assert_select "tr>td", :text => "Info".to_s, :count => 2
    assert_select "tr>td", :text => "Video".to_s, :count => 2
    assert_select "tr>td", :text => "Image".to_s, :count => 2
    assert_select "tr>td", :text => "Link".to_s, :count => 2
  end
end
