import React from 'react';
import { useLocalStorage } from '../customHooks/useLocalStoraje.jsx';

const defaultTodos = [
  {
    text: 'Estudiar en platzi',
    completed: true
  },
  {
    text: 'Ir al gimnasio',
    completed: false
  },
  {
    text: 'Dormir temprano',
    completed: false
  },
  {
    text: 'Trabajar en Indra',
    completed: true
  }
];


export const TodoContext = React.createContext();

function TodoProvider({children}) {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TAREAS_V1', defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(item => !!item.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(item => {
    let text = item.text.toLowerCase()
    let searchText = searchValue.toLowerCase()
    return text.includes(searchText)
  })

  const renderTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }
  const deleteTodos = (text) => {
    const newTodos = [...todos];
    const todoWithoutDeleted = newTodos.filter((todo) => todo.text !== text)
    saveTodos(todoWithoutDeleted)
  }
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos)
  }
  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        renderTodos,
        deleteTodos,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export {TodoProvider}
