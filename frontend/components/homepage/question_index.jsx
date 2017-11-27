import React from 'react';

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
              <li
              className="question-item"
              key={question.id}
              >{question.title}
              <br/>
              {question.body}
              </li>
              ) 
            )
            }
        
          </ul>
      </div>
    )
  };
};

export default QuestionIndex;