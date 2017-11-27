import React from 'react';
import QuestionIndexItem from './question_index_item'

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchQuestions();
  }

  render () {
    const questions = this.props.questions;
    console.log(questions)

    return (
      <div>
          <ul className="question-items">
            {
              questions.map(question => (
              <QuestionIndexItem 
               key = {question.id}
               question={question}
              />
              ) 
            )
            }
        
          </ul>
      </div>
    )
  };
};

export default QuestionIndex;