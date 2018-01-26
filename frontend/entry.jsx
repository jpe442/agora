import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';
import Modal from 'react-modal';
import {searchQuestions} from './actions/question_actions';
import {createAnswer} from './actions/answer_actions';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = configureStore(preloadedState);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.searchQuestions = searchQuestions;
  window.createAnswer = createAnswer;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
