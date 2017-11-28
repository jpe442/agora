import React from 'react';
import QuestionIndexItem from './question_index_item'

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchQuestions();
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.questions)
  }

  render () {
    let questions = this.props.questions;
    // if (questions) {
    //   questions = questions.reverse();
    // }
    // console.log(questions)
    // console.log("yes in render")

    return (
      <div>
          <ul className="question-items">
          < div className="question-feed-title">Question Feed</div> 
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