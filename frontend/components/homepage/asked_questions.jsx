import React from 'react';
import QuestionIndexItem from './question_index_item'

class AskedQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.questions = this.props.questions
  }
  
  // componentDidUpdate() {
  //   console.log("mounting")
  //   this.props.fetchQuestions();
  // }

  // componentWillUpdate()

  componentWillReceiveProps(newProps) {
    console.log("receiving props");
    console.log(newProps.questions)
    this.setState(newProps.questions);
  }

  render() {
    console.log(this)
    console.log(this.props)

    let questions = this.props.questions;
    let currentUser = this.props.currentUser;
    let asked = questions.filter(question => question.interlocutor_id === currentUser.id);
    if (asked) {
      asked = asked.reverse();
    }
    console.log(asked)
    console.log("yes in render")

    return (
      <div>
        <ul className="asked-items">
          <h3 className="asked-questions-title">Questions You've Asked</h3>
          {
            asked.map(question => (
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