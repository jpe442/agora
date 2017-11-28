import React from 'react';
import Modal from 'react-modal';
import QuestionForm from '../homepage/question-form'

const NavQuestionBtn = ({ currentUser, createQuestion, toggleQuestionModal, openQuestionModal }) => {
  return (
    <div>
    <div 
    className="question-btn"
    onClick={toggleQuestionModal}
    >Propose Question
    </div>

    <Modal
      className="question-modal"
      isOpen={openQuestionModal}
      onRequestClose={toggleQuestionModal}> 
      <div className="cancelbtn" onClick={toggleQuestionModal}>X</div>
      <QuestionForm
      currentUser={currentUser}
      createQuestion={createQuestion}
      toggleQuestionModal={toggleQuestionModal}
      openQuestionModal={openQuestionModal}
        />
    </Modal>
    </div>
  )
}

export default NavQuestionBtn;