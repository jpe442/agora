# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all
Answer.destroy_all

user1 = User.create!(
  :username => "socr8tes",
  :password => "password",
  :email => "socrat8s@gmail.com"
)

user2 = User.create!(
  :username => "phaedrus",
  :password => "password",
  :email => "phaedrusspeaks@gmail.com"
)

user3 = User.create!(
  :username => "demonsthenes",
  :password => "password",
  :email => "dem0@gmail.com"
)

user4 = User.create!(
  :username => "guest",
  :password => "guestpassword",
  :email => "rando@rando.com"
)

user5 = User.create!(
  :username => "josh",
  :password => "password",
  :email => "joshe123@gmail.com"
)

question1 = Question.create!(
  :title => "What is a question?",
  :body => "From the depths...",
  :interlocutor_id => user5.id
)

question2 = Question.create!(
  :title => "How long does it take to seed a DB appropriately?",
  :body => "Hail mary...",
  :interlocutor_id => user5.id
)

question3 = Question.create!(
  :title => "What is an App?",
  :body => "I can already tell these questions are going to get weird...",
  :interlocutor_id => user2.id
)

question4 = Question.create!(
  :title => "What is a your favorite name?",
  :body => "Really think...",
  :interlocutor_id => user1.id
)

question5 = Question.create!(
  :title => "What is your favorite new TV show?",
  :body => "In a season full of amazing tv...",
  :interlocutor_id => user3.id
)

question6 = Question.create!(
  :title => "Where do we go from 'here'?",
  :body => "...",
  :interlocutor_id => user3.id
)

question7 = Question.create!(
  :title => "Will Donald Trump be impeached for the Russian scandal?",
  :body => "Not messing around...",
  :interlocutor_id => user2.id
)

question8 = Question.create!(
  :title => "Are doors or chairs better?",
  :body => "You know, in general...",
  :interlocutor_id => user1.id
)

answer1 = Answer.create!(
  :body => "A question is a request for information...",
  :rhetor_id => user4.id,
  :question_id => question1.id
)

answer2 = Answer.create!(
  :body => "This is a dumb question!",
  :rhetor_id => user1.id,
  :question_id => question1.id
)

answer3 = Answer.create!(
  :body => "I don't know but I am finding out right now...",
  :rhetor_id => user4.id,
  :question_id => question2.id
)

answer4 = Answer.create!(
  :body => "You will just have to try and see how long.",
  :rhetor_id => user1.id,
  :question_id => question2.id
)

answer5 = Answer.create!(
  :body => "It's already very weird.",
  :rhetor_id => user5.id,
  :question_id => question3.id
)

answer6 = Answer.create!(
  :body => "Yes, but that is the nature of database seeding a question forum ,right?",
  :rhetor_id => user1.id,
  :question_id => question3.id
)

answer7 = Answer.create!(
  :body => "No. Period.",
  :rhetor_id => user1.id,
  :question_id => question4.id
)

comment1 = Comment.create!(
  :message => "That is a good answer!",
  :commentor_id => user3.id,
  :answer_id => answer1.id
)

comment2 = Comment.create!(
  :message => "Your a dumb question!",
  :commentor_id => user5.id,
  :answer_id => answer2.id
)

comment3 = Comment.create!(
  :message => "Hey!",
  :commentor_id => user5.id,
  :answer_id => answer2.id
)

comment4 = Comment.create!(
  :message => "Don't flame!",
  :commentor_id => user3.id,
  :answer_id => answer2.id
)

comment5 = Comment.create!(
  :message => "Agreed!",
  :commentor_id => user1.id,
  :answer_id => answer2.id
)

comment6 = Comment.create!(
  :message => "Disagree!!!!!",
  :commentor_id => user2.id,
  :answer_id => answer2.id
)

comment7 = Comment.create!(
  :message => "Are you kidding me!",
  :commentor_id => user1.id,
  :answer_id => answer3.id
)

comment8 = Comment.create!(
  :message => "WTH!",
  :commentor_id => user4.id,
  :answer_id => answer3.id
)

comment9 = Comment.create!(
  :message => "Am I typing?!",
  :commentor_id => user4.id,
  :answer_id => answer4.id
) 

comment10 = Comment.create!(
  :message => "Here we go again...",
  :commentor_id => user2.id,
  :answer_id => answer5.id
) 

comment10 = Comment.create!(
  :message => "Best answer. Period. LOL...",
  :commentor_id => user2.id,
  :answer_id => answer7.id
) 