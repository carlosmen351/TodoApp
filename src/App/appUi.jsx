import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { TodoError } from '../TodoError/TodoError';
import { EmptyTodo } from '../EmptyTodo/EmptyTodo';
import { TodoContext } from '../TodoContext/TodoContext';
import { Modal } from '../modals/Modal';
import { CreateTodoForm } from '../CreateTodoForm/CreateTodoForm';

export const AppUi = () => {
  const {
    searchedTodos,
    renderTodos,
    deleteTodos,
    loading,
    error,
    openModal
  } = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
      { loading && <TodoLoading/> }
      { error && <TodoError/> }
      { (!loading && searchedTodos.length === 0) && <EmptyTodo/> }
      { (!loading && searchedTodos.length !== 0) &&
        searchedTodos.map(item => {
        return (
          <TodoItem
            key={item.text}
            description={item.text}
            completed={item.completed}
            onComplete={() => renderTodos(item.text)}
            onDelete={() => deleteTodos(item.text)}
          />
        )
      })}
      </TodoList>
      <CreateTodoButton/>
      {openModal && (
        <Modal>
          <CreateTodoForm></CreateTodoForm>
        </Modal>
      )}
    </React.Fragment>
  );
}
