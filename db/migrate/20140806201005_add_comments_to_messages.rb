class AddCommentsToMessages < ActiveRecord::Migration
  def change
    remove_column :messages, :message
    add_column :messages, :comment, :text
  end
end
