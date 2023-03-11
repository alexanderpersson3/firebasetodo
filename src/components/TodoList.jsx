import Todo from './Todo';
import React, { useState, useEffect } from 'react';
import './TodoList.scss';

import {
  addTodosDB,
  fetchFromDB,
  updateTodosDB,
  deleteTodoDB,
} from './../operation';

function TodoList() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lägg till toto, både i UI och DB
    addTodo();
    setInput('');
  };

  const addTodo = async () => {
    const newTodo = {
      desc: input,
      completed: false,
    };
    await addTodosDB(newTodo);
    fetchFromDB().then((newTodo) => {
      setTodos(newTodo);
    });
  };

  const editTodo = (id, newDesc) => {};

  const deleteTodo = async (id) => {
    console.log('delete todo', id);
    const remainingTodos = todos.filter((item) => {
      return id !== item.id;
    });
    await deleteTodoDB(id);
    setTodos(remainingTodos);
  };

  useEffect(() => {
    console.log(todos);
    console.log('use effect körs');
    fetchFromDB().then((newTodo) => {
      setTodos(newTodo);
    });
  }, []);

  return (
    <div className='TodoList'>
      <h1>Att göra</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Lägg till uppgifter</label>
            <input
              id='title'
              type='text'
              onChange={handleChange}
              value={input}
              required={true}
            />
          </div>

          <button type='submit' className='btn btn-primary mt-1'>
            Lägg till
          </button>
        </form>
      </div>
      <ul>
        {todos.map((item) => {
          return (
            <Todo
              key={item.id}
              id={item.id}
              desc={item.desc}
              completed={item.completed}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
