import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate4 from "./components/TodoTemplate4";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import {TodoProvider} from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
      <TodoProvider>
          <GlobalStyle/>
        <TodoTemplate4>
            <TodoHead />
            <TodoList />
            <TodoCreate/>
        </TodoTemplate4>
      </TodoProvider>
  );
}

export default App;
