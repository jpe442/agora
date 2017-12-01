class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :commentor_id
      t.integer :answer_id
      t.string :message

      t.timestamps
    end
  end
end
