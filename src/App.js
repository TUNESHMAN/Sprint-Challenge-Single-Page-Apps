import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import { Route } from "react-router-dom";
import SearchForm from "./components/SearchForm";



export default function App() {
  return (
    <main>
      <Header/>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <SearchForm/>
    </main>
  );
}
