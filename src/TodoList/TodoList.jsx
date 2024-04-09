import React from 'react';
import './TodoList.css'

export const TodoList = (props) => {
  return (
    <ul className='TodoList' >
      {props.children}
    </ul>
  )
}
