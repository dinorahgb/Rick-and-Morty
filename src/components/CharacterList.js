import React from "react";
import "../stylesheets/CharacterList.scss";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const characterElements = props.characters.map((character) => {
    return (
      <li key={character.id} character={character}>
        <CharacterCard character={character} />
      </li>
    );
  });

  return (
    <section className='section__list'>
      <ul className='section__list--elements'>{characterElements}</ul>
    </section>
  );
}

export default CharacterList;
