import React from 'react';

import CreateCommentForm from './create_comment_form'
import EditCommentForm from './edit_comment_form'
import CommentItem from './comment_list_item'

class Comments extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.toggleEditAnswerMode)
  }

  render() {
    const comments = Object.values(this.props.comments).filter(comment => comment.answer_id === this.props.answer.id)
    const sessionForm = this.props.toggleEditCommentMode ? <EditCommentForm
      updateComment={this.props.updateComment}
      currentUser={this.props.currentUser}
      answer={this.props.answer}
      commentToEdit={this.props.commentToEdit}
      editCommentMode={this.props.editCommentMode}

    /> : <CreateCommentForm
        createComment={this.props.createComment}
        currentUser={this.props.currentUser}
        answer={this.props.answer} />

    return (
      <div>
      <div>
        {sessionForm}
      </div>
      <ul className="comments-list">

        {
          comments.reverse().map(comment =>
            <CommentItem 
              key={comment.id}
              comment={comment}
              editCommentMode={this.props.editCommentMode}
              currentUser={this.props.currentUser}
              deleteComment={this.props.deleteComment}
              updateComment={this.props.updateComment}

            />
          )

        }
      </ul>
      </div>

    )
  }
}


export default Comments;