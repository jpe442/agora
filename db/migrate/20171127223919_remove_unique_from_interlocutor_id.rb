class RemoveUniqueFromInterlocutorId < ActiveRecord::Migration[5.1]
  def change
    remove_index(:questions, :interlocutor_id)
    add_index(:questions, :interlocutor_id)
  end
end
