import React from 'react';
import QuestionIndexItem from './question_index_item'

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidUpdate() {
  //   console.log("mounting")
  //   this.setState(newProps.search)
  // }

  // componentWillUpdate()

  componentWillReceiveProps(newProps) {
    console.log("receiving props Josh");
    console.log(newProps.search);
    this.setState(newProps.search);
    this.render();
  }

  // componentDidMount() {
  //   this.props.fetchQuestions();
  // }

  render() {

    return (
      <div>
        <ul className="search-question-items">
          <h3 className="search-question-items-title">Latest Search Results</h3>
          {

            Object.values(this.props.search).map(question => (
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