class Api::QuestionSearchesController < ApplicationController
  def index
      @questions = Question.top_10_results(search_params[:query])
      render :index
  end

private

  def search_params
     params.require(:search).permit(:query)
  end
end
