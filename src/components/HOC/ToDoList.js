import React, { useState } from 'react';
import TodoItem from './ToDoItem';
import withLogger from './withLogger';
import TodoForm from './ToDoForm';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo('');
    }
  };

  const completeTodo = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onComplete={() => completeTodo(index)} />
        ))}
      </ul>
    </div>
  );
};

export default withLogger(ToDoList);