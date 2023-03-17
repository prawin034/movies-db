import React from 'react';

import { Link, useParams } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import Usehooks from '../hooks/usehooks';
const MovieDetail = () => {
  const { id } = useParams();

  const { loading, error, data: movie } = Usehooks(`&i=${id}`);

  if (loading) {
    return (
      <h2 className="loading">
        <BarLoader className="loading_spinner" color="#1098aD" />
      </h2>
    );
  }

  if (error.show) {
    return (
      <div>
        <h3>{error.msg}</h3>
        <Link to="/">BACK</Link>
      </div>
    );
  }

  const { Title, Year, Poster, Released, Genre, Director, Actors } = movie;

  return (
    <div className="movies_detail">
      <p className="movies_detail_title"> {Title}</p>
      <img className="movies_detail_img" src={Poster} alt={Title} />
      <div className="flex">
        <p className="movies_detail_Year">YEAR:{Year}</p>
        <p className="movies_detail_Year">RELEASED:{Released}</p>
        <p className="movies_detail_Year">BY:{Director}</p>
        <p className="movies_detail_Year">GENRE:{Genre}</p>
        <p className="movies_detail_Year">GENRE:{Actors}</p>
      </div>

      <Link className="movies_detail_a" to="/">
        BACK
      </Link>
    </div>
  );
};

export default MovieDetail;
