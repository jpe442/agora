import React from 'react';
// import { Link } from 'react-router-dom';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }


  // componentWillReceiveProps(newProps) {
  //   this.setState(newProps.answer)
  // }


  handleDelete(e) {
    e.preventDefault(e);
    this.props.deleteComment(this.props.comment.id)
  };


  handleEdit(e) {
    e.preventDefault(e);
    this.props.editCommentMode(this.props.comment)
  };


  render() {
    console.log("I am currentUser")
    console.log(this.props.currentUser)
    const buttons = this.props.currentUser.id === this.props.comment.commentor_id ? (
      <div className="commentor-view">
        <div onClick={this.handleEdit} className="comment-edit">Change</div>
        <div onClick={this.handleDelete} className="comment-delete">Nix</div>
      </div>
    ) : (
        <div></div>
      )

    return (
      <div>
        <li
          className="comment-item"
        >
          <div>{buttons}</div>
          <p className="comment-content">{this.props.comment.message}</p>

        </li>
      </div>
    );
  }
}


export default CommentItem;






