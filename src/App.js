import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import { Route, Link } from "react-router-dom";
import SearchForm from "./components/SearchForm";



export default function App() {
  return (
    <main>
      {/* <Header/>
      <Link to="/">Home</Link>
      <Route path="/" render={CharacterList}/> */}
      <SearchForm/>
    </main>
  );
}
