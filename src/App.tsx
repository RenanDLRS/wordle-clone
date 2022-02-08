import React from "react";
import Wordle from "./components/wordle/wordle";
import GlobalStyle, { PageContainer } from "./styles/global";

function App() {
  return (
    <PageContainer>
      <GlobalStyle />
      <Wordle />
    </PageContainer>
  );
}

export default App;
