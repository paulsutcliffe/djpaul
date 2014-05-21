#Coding: utf-8
require 'factory_girl'
require 'database_cleaner'

DatabaseCleaner.strategy = :truncation

DatabaseCleaner.clean

FactoryGirl.create :admin

3.times do
  FactoryGirl.create :category
end

16.times do
  FactoryGirl.create :post
end
