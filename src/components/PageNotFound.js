import React from "react";
import "../stylesheets/PageNotFound.scss";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className='section__notFound'>
      <h2>Página no encontrada</h2>
      <p> Vuelve al inicio haciendo click </p>
      <Link className='section__notFound--link' to='/'>
        AQUI
      </Link>
    </div>
  );
}

export default PageNotFound;
