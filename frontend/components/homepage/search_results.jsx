import React from 'react';
import QuestionIndexItem from './question_index_item'

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.props.search
  }

  // componentDidUpdate() {
  //   console.log("mounting")
  //   this.props.fetchQuestions();
  // }

  // componentWillUpdate()

  // componentWillReceiveProps(newProps) {
  //   console.log("receiving props");
  //   console.log(newProps.questions)
  //   this.setState(newProps.questions);
  // }

  // componentDidMount() {
  //   this.props.fetchQuestions();
  // }

  render() {

    return (
      <div>
        <ul className="search-question-items">
          <h3 className="search-question-items-title">Latest Search Results</h3>
          {

            Object.values(this.search).map(question => (
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

export default SearchResults;