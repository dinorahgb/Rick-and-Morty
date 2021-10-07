import React from "react";

function FiltersBySpecies(props) {
  const handleChangeSelect = (ev) => {
    props.handleFilters({
      value: ev.target.value,
      key: "filterSpecies",
    });
  };
  return (
    <>
      <label htmlFor='filterspecies'>Especie</label>
      <select
        className='section__filters--filterSpecies'
        name='filterSpecies'
        id='filterSpecies'
        onChange={handleChangeSelect}
        value={props.filterSpecies}
      >
        <option value=''>Todos</option>
        <option value='Human'>Human</option>
        <option value='Alien'>Alien</option>
      </select>
    </>
  );
}

export default FiltersBySpecies;
