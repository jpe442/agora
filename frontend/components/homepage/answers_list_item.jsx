import React from 'react';
import { Link } from 'react-router-dom';

export default ({ answer }) => {

  return (
      <li
        className="answer-item"
      >
        <p className="answer-content">{answer.body}</p>
      </li>
  );
}