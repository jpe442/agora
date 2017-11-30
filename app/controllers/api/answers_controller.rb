class Api::AnswersController < ApplicationController
  class AnswersController < ApplicationController

  def create
    @question = Question.new(answer_params)
    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages, status: 401
    end
  end

  def destroy
    @answer = Question.find(params[:id])
    @answer.destroy!
    render json: @answer
  end

  def update
  end

  private

  def answer_params
    params.require(:answer).permit(:rhetor_id, :question_id, :body)

  end
end
