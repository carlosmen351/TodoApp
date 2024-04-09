import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';

export const TodoCounter = () => {
  const {
    completedTodos,
    totalTodos,
    loading
  } = React.useContext(TodoContext)
  if (totalTodos === 0) {
    return (
      <h1 className="TodoCounter">
        Crea una nueva tarea para comenzar!!!.
      </h1>
    )
  } else if (loading) {
    return (
        <h1 className="TodoCounter">
          Cargando tus tareas!
        </h1>
      )
  } else {
    return (
      completedTodos === totalTodos
        ?
          <h1 className="TodoCounter">
            Felicidades! Has completado todas las tareas.
          </h1>
        :
          <h1 className="TodoCounter">
            Has completado {completedTodos} de {totalTodos} Tareas.
          </h1>
      )
  }
}