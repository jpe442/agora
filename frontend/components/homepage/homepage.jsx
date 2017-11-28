import React from 'react';
import QuestionIndexContainer from './question_index_container'
import AskedQuestionsContainer from './asked_questions_container'
export const HomePage = () => {
  return (
    <div>
      <QuestionIndexContainer/>
      <AskedQuestionsContainer />
    </div>
  )
}