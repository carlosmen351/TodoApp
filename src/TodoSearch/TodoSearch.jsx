import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext/TodoContext';

export const TodoSearch = () => {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext)
  return (
    <input
      className="TodoSearch"
      placeholder="Estudiar"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  )
}
