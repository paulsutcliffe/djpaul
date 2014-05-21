class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :info
      t.string :video
      t.string :image
      t.string :link
      t.integer :category_id

      t.timestamps
    end
  end
end
