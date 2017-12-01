import React from 'react';

class EditCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.commentToEdit.id,
      message: this.props.commentToEdit.message,
      answer_id: this.props.answer.id,
      commentor_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.message)
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    this.props.updateComment(comment)
      .then(this.props.editCommentMode({}));
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
        <form className="new-coment-form" >
          <textarea
            rows="2" cols="80"
            className="new-comment-input"
            placeholder="Comment here..."
            value={message}
            onChange={this.handleInput('message')}
          />
          <div onClick={this.handleSubmit} className="comment-submit-btn">Recomment</div>
        </form>
      </div>
    )
  }
}


export default EditCommentForm;

