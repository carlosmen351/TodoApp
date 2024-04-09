import React from 'react';
import './CreateTodoForm.css';
import { TodoContext } from '../TodoContext/TodoContext';

export const CreateTodoForm = () => {
  const {
    openModal,
    setOpenModal,
    addTodo
  } = React.useContext(TodoContext)

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onsubmit = (evt) => {
    evt.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(!openModal);
  }

  return (
    <form onSubmit={onsubmit} className='CreateTodo'>
      <label>Escribe tu nueva tarea</label>
      <textarea
        placeholder='Aprender...'
        value={newTodoValue}
        onChange={ (evt) => {
          setNewTodoValue(evt.target.value)
        }}
        required
      />
      <div className='containerButtons'>
        <button
          className='todoButtonCancel'
          type='button'
          onClick={ () => {
            setOpenModal(!openModal)
          }} >
          Cancelar
        </button>
        <button
          className='todoButtonSave'
          type='submit'
        >
          Añadir
        </button>
      </div>

    </form>
  )
}
