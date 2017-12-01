class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def update
      @comment = Comment.find(params[:id])

    if @comment && @comment.update_attributes(comment_params)
      render :show
    elsif
      render json: ['Could not locate comment'], status: 400
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy!
    render json: @comment
  end

  private

  def comment_params
    params.require(:comment).permit(:commentor_id, :anwer_id, :message)
  end
end
