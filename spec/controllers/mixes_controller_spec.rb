require 'spec_helper'

describe MixesController do

  describe "GET 'fan'" do
    it "returns http success" do
      get 'fan'
      response.should be_success
    end
  end

  describe "GET 'non-fan'" do
    it "returns http success" do
      get 'non-fan'
      response.should be_success
    end
  end

end
