class Question < ApplicationRecord
  validates :interlocutor_id, :title, presence: true
  belongs_to :interlocutor,
    class_name: :User,
    primary_key: :id,
    foreign_key: :interlocutor_id
end
