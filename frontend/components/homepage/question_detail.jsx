import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


class QuestionDetail extends React.Component {
  constructor(props) {
    super(props)
  }
  
  

  render() {
   
    console.log("here in question detail")
    console.log(this.props)
    return (
      <div>
        <div className="question-detail-main">
          <h2 className="question-detail-title">{this.props.question.title}</h2>
          <h3 className="interlocutor-name">Interlocutor: {this.props.question.interlocutor_id}</h3>
          <p className="question-detail-body">{this.props.question.body}</p>
          <Link className="detail-to-homepage" to={"/homepage/"}>go back</Link>
          <h4>give me a way to edit this question if I am the interlocutor</h4>
        </div>
    
      </div>
    )
  }
}

export default QuestionDetail;