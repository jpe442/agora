class Question < ApplicationRecord
  validates :interlocutor_id, :title, presence: true

  belongs_to :interlocutor,
    class_name: :User,
    primary_key: :id,
    foreign_key: :interlocutor_id
  
  has_many :answers

  def self.top_10_results(query_params)
    param = '%' + query_params.downcase + '%'
    Question.where('lower(title) LIKE ?', param).limit(10)
  end
  
end
