require 'faker'

FactoryGirl.define do
  factory :post do
    title { Faker::Name.name }
    info { Faker::Company.bs }
    video {["https://www.youtube.com/watch?v=muwBQnHKCa4",""].sample}
    image { Rack::Test::UploadedFile.new(File.join(Rails.root,'spec','support','image.png'))}
    link { Faker::Internet.url}
    category_id {[1,2,3].sample}
  end
end
