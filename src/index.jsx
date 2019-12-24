import React from "react";
import ReactDOM from "react-dom";
import { Store } from "./store";
import { MainContainer } from "./containers/MainContainer";
import { Sidebar } from "./components/Sidebar";
import { Quotes } from "./components/Quotes";

import "./styles.css";

function App() {
  return (
    <Store.Provider>
      <MainContainer direction="row" align="flex-start" justify="flex-start">
        <Sidebar />
        <Quotes />
      </MainContainer>
    </Store.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
