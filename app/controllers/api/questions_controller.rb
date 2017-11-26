class Api::QuestionsController < ApplicationController

  def create
    @question = Question.new(question_params)

    if @question.save
      render "api/questions/show"
    else
      render json: @question.errors.full_messages, status: 401
    end
  end

  def destroy
  end

  def update
    @question = Question.find(params[:id])

    if @question && @question.update_attributes
      render "api/questions/show"
    elsif
      render json: ['Could not locate question'], status: 400
    else
      render json: @question.errors.full_messages, status: 401
    end
  end

  def index
    @questions = Question.all
    render json: @questions
  end

  private

  def question_params
    params.require(:question).permit(:interlocutor_id, :title, :body)
  end

end
