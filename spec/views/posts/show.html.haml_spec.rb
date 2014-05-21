require 'spec_helper'

describe "posts/show", :type => :view do
  before(:each) do
    @post = assign(:post, Post.create!(
      :title => "Title",
      :info => "Info",
      :video => "Video",
      :image => "Image",
      :link => "Link"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Title/)
    expect(rendered).to match(/Info/)
    expect(rendered).to match(/Video/)
    expect(rendered).to match(/Image/)
    expect(rendered).to match(/Link/)
  end
end
