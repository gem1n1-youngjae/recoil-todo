import React from "react";
import { RecoilRoot } from "recoil";
import { TodoList } from "./Pages";
import GlobalStyle from "./Style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </>
  );
}

export default App;
