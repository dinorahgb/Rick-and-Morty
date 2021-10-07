import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "./services/getDataFromApi";
import "../stylesheets/App.scss";
import img from "../images/img.png";
import CharacterDetail from "./CharacterDetail";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import PageNotFound from "./PageNotFound";
import ls from "../components/services/localStorage";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterSpecies, setFilterSpecies] = useState(
    ls.get("filterSpecies", "")
  );

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);
  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

  useEffect(() => {
    ls.set("characters", characters);
    ls.set("filterName", filterName);
    ls.set("filterSpecies", filterSpecies);
  }, [characters, filterName, filterSpecies]);

  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const handleFilters = (data) => {
    if (data.key === "filterName") {
      setFilterName(data.value);
    } else {
      setFilterSpecies(data.value);
    }
  };

  const filterCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return filterSpecies === "" ? true : character.specie === filterSpecies;
    });

  const renderCharacterDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.characterId);
    const foundCharacter = characters.find((character) => {
      return character.id === routeCharacterId;
    });
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return (
        <h2 className='CharacterNotFound'>
          <Link className='CharacterNotFound' to='/'>
            El personaje que busca no existe
          </Link>
        </h2>
      );
    }
  };

  return (
    <>
      <h1 className='title'>
        <img className='img' src={img} alt='Rick and Morty' />
      </h1>
      <Switch>
        <Route exact path='/'>
          <Filters
            handleFilters={handleFilters}
            handleForm={handleForm}
            filterName={filterName}
            filterSpecies={filterSpecies}
          />
          <CharacterList characters={filterCharacters} />
        </Route>
        <Route
          path='/detail/:characterId'
          render={renderCharacterDetail}
        ></Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
