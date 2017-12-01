class Api::AnswersController < ApplicationController

  def create
    @answer = Answer.new(answer_params)
    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages, status: 401
    end
  end

  def destroy
    @answer = Answer.find(params[:id])
    @answer.destroy!
    render json: @answer
  end

  def update
    @answer = Answer.find(params[:id])

    if @answer && @answer.update_attributes(answer_params)
      render "api/answers/show"
    elsif
      render json: ['Could not locate answer'], status: 400
    else
      render json: @question.errors.full_messages, status: 401
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:rhetor_id, :question_id, :body)

  end
end
