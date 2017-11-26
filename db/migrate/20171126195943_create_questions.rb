class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.integer :interlocutor_id, null: false
      t.string :title, null: false
      t.text :body

      t.timestamps
    end
    add_index :questions, :interlocutor_id, unique: true
    add_index :questions, :title, unique: true
  end
end
