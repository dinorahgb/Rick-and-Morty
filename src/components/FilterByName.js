import React from "react";

function FilterByName(props) {
  const handleChangeName = (ev) => {
    props.handleFilters({
      value: ev.target.value,
      key: "filterName",
    });
  };

  return (
    <>
      <label htmlFor='filterName'>Busca tu personaje</label>
      <input
        className='section__filters--filterName'
        placeholder='Ej: Abradolf Lincler'
        type='text'
        name='name'
        id='filterName'
        onChange={handleChangeName}
        value={props.filterName}
      />
    </>
  );
}

export default FilterByName;
