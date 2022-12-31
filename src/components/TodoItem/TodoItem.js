import React from "react";
import './TodoItem.css';

export const TodoItem = ({todo}) => {
  const onDelete = () => {
    console.log('deleto');
  }

  return (
    <li>
      <input type="radio" 
             checked={todo.completed}
      />
      <p className={todo.completed ? 'line-through ' : ''}>
        {todo.description}
      </p>
      <span onClick={ onDelete }>X</span>
    </li>
  )
}