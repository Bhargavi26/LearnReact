import React from 'react';
import withLogger from './withLogger';

const ToDoItem = ({ todo, onComplete }) => {
  return (
    <li>
      {todo}
      <button onClick={onComplete}>Complete</button>
    </li>
  );
};

export default withLogger(ToDoItem);