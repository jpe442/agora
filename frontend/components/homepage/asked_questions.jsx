import React from 'react';
import QuestionIndexItem from './question_index_item'

class AskedQuestions extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log("in will receive props in asked questions")
    console.log(nextProps)
    this.setState(nextProps.questions);
  }

  componentDidMount() {
    this.props.fetchQuestions();
    console.log("mounting")
    console.log(this.props.questions)
  }

  render() {
    let questions = this.props.questions;
    console.log("tracking these questions down")
    console.log(this.props.questions)
    let currentUser = this.props.currentUser;
    let asked = {};
    let questions_vals = Object.values(questions);

    questions_vals.forEach(question => {
      console.log("in asked questions about to match em up")
      if (question.interlocutor_id === currentUser.id) {
        asked[question.id] = question;
      }
    });

    return (
      <div>
        <ul className="asked-items">
          <h3 className="asked-questions-title">Questions You've Asked</h3>
          {
            Object.values(asked).reverse().map(question => (
              <QuestionIndexItem
                key={question.id}
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

export default AskedQuestions;