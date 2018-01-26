import React from 'react';
import QuestionIndexContainer from './question_index_container';
import AskedQuestionsContainer from './asked_questions_container';
import SearchResultsContainer from './search_results_container';

export const HomePage = () => {
  return (
    <div>
      <QuestionIndexContainer/>
      <AskedQuestionsContainer />
      <SearchResultsContainer />
    </div>
  )
}