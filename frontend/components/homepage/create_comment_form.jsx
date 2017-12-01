import React from 'react';

class CreateCommentForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("here in createcommentform")
    console.log(this.props)
    this.state = {
      message: "",
      answer_id: this.props.answer.id,
      commentor_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    this.props.createComment(comment);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  render() {
    const { message } = this.state;

    return (
      <div>
        <form className="new-comment-form" >
          <textarea
            rows="2" cols="50"
            className="new-comment-input"
            placeholder="Add comment here..."
            value={message}
            onChange={this.handleInput('message')}
          />
          <div onClick={this.handleSubmit} className="comment-submit-btn">Comment</div>
        </form>
      </div>
    )
  }
}


export default CreateCommentForm;

