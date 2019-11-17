import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';

export default function CharacterList() {
  const [character, setCharacter] = React.useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        let details = (response.data.results)
        console.log(details);
        setCharacter(details)
        
      })
      .catch(error => {
        console.log(error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
<h2>{character.map((element, index)=> {
  return(
    <CharacterCard
    key = {index}
    name = {element.name}
    gender = {element.gender}
    status = {element.status}
    id ={element.id}
    image = {element.image}
    species ={element.species}/>
  )

  
})}</h2>
    </section>
  );
}
