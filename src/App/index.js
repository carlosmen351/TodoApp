import React from 'react';
import { AppUi } from './appUi';
import { TodoProvider } from '../TodoContext/TodoContext';

export function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  )
}
