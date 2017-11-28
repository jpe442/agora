import React from 'react';
import { Route } from 'react-router-dom';

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props)
  }
  
  

  render() {
   
    console.log("here in question detail")
    console.log(this.props)
    return (
      <div>
        <h2>{this.props.question.title}</h2>
          <p>{this.props.question.body}</p>
        <h4>give me a way to go back to user homepage</h4>
        <h4>provide more information about this question</h4>
        <h4>give me a way to edit this question if I am the interlocutor</h4>
      </div>
    )
  }
}

export default QuestionDetail;