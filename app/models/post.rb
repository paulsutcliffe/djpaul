class Post < ActiveRecord::Base
  mount_uploader :image, ArtworkUploader
  belongs_to :category
end
