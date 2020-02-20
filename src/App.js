import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate4 from "./components/TodoTemplate4";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
      <>
          <GlobalStyle/>
        <TodoTemplate4>안녕하세요!</TodoTemplate4>
      </>
  );
}

export default App;
