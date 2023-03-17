import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/Context';
import { CircleLoader } from 'react-spinners';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return (
      <h2 className="loading_home">
        <CircleLoader
          className="loading_home_spinner"
          size={100}
          color="#1098aD"
        />
      </h2>
    );
  }

  return (
    <section className="movies">
      <div className="movies_box">
        {movies.map((item, index) => {
          const { Title, Year, Poster, imdbID } = item;

          return (
            <div className="movies_box_mini" key={index}>
              <img
                className="movies_box_mini_img"
                src={Poster === 'N/A' ? url : Poster}
                alt={Title}
              />

              <div className="movies_box_mini_content">
                <p className="movies_box_mini_content_title">
                  {Title.substring(0, 10)}..
                </p>
                <p className="movies_box_mini_content_year">{Year}</p>
              </div>
              <Link
                key={imdbID}
                className="movies_box_mini_detail"
                to={`/movies/${imdbID}`}
              >
                DETAILS
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
