require 'test_helper'

class Api::QuestionSearchesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_question_searches_index_url
    assert_response :success
  end

end
