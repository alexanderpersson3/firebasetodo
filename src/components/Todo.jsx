import React, { useState } from 'react';

function Todo(props) {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput('');
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <li key={props.id}>
      {/* <form onSubmit={(handleSubmit)}>
            <input type="checkbox" id={props.id}/>
            {props.desc}
            <div className="btn-group">
            <button type="button">Edit</button>
            <button type="button" onClick={() => props.deleteTodo(props.id)}>Delete</button>
            </div>
        </form> */}
      <form onSubmit={handleSubmit}>
        <label>Uppgift: {props.desc}</label>
        {/* <input
            type='text'
            id={props.id}
            onChange={handleChange}
            value={input}
          /> */}
        {props.desc}
        <div className='btn-group'>
          {/* <button
              type='button'
              onClick={() => props.editTodo(props.id, input)}
            >
              Redigera
            </button> */}
          <button type='button' onClick={() => props.deleteTodo(props.id)}>
            Ta bort
          </button>
        </div>
      </form>
    </li>
  );
}

export default Todo;
