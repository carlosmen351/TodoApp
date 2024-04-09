import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext/TodoContext';

export const CreateTodoButton = () => {
  const {
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
  return (
    <button
      className='CreateTodoButton'
      onClick={ () => {
        setOpenModal(!openModal)
      }}
    >
      +
    </button>
  )
}
