require 'test_helper'

class Api::AnswersControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_answers_create_url
    assert_response :success
  end

end
