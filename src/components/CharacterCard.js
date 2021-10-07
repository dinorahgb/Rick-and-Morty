import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterCard.scss";

function CharacterCard(props) {
  return (
    <>
      <Link className="section__card--link" to={`/detail/${props.character.id}`}>
        <section className='section__card'>
          <img
            className='section__card--img'
            src={props.character.image}
            alt={props.character.name}
          />
          <div className='section__card--name'>
            <h1>{props.character.name}</h1>
            <span>{props.character.specie}</span>
          </div>
        </section>
      </Link>
    </>
  );
}

export default CharacterCard;
