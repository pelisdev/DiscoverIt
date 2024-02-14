// Home.js
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const API_KEY = "05902896074695709d7763505bb88b4d";
const API_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const ITEMS_PER_ROW = 8;

const GuideSection = () => (
  <div className="container p-4 bg-black text-white">
    <h2>Guía de Uso</h2>
    <p>
      ¡Bienvenido a nuestra plataforma! Aquí puedes descubrir películas y series populares y obtener información sobre dónde verlas.
    </p>
    {/* Agrega más información y guía aquí según tus necesidades */}
  </div>
);

const Movie = ({ movie }) => (
  <div className="col-md-1 mb-4">
    <div className="poster-container position-relative">
      <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} className="img-fluid poster-image" loading="lazy" />
      <div className="movie-info">
        <h4 className="mb-0">{movie.title}</h4>
        <p>Año: {new Date(movie.release_date).getFullYear()}</p>
      </div>
    </div>
  </div>
);

const Series = ({ series }) => (
  <div className="col-md-1 mb-4">
    <div className="poster-container position-relative">
      <img src={`${IMAGE_BASE_URL}${series.poster_path}`} alt={series.name} className="img-fluid poster-image" loading="lazy" />
      <div className="series-info">
        <h4 className="mb-0">{series.name}</h4>
        <p>Año: {new Date(series.first_air_date).getFullYear()}</p>
      </div>
    </div>
  </div>
);

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    try {
      const responseMovies = await axios.get(
        `${API_URL}/movie/popular?api_key=${API_KEY}&language=es&page=${currentPage}`
      );
      const movies = responseMovies.data.results.slice(0, ITEMS_PER_ROW);

      const responseSeries = await axios.get(
        `${API_URL}/tv/popular?api_key=${API_KEY}&language=es&page=${currentPage}`
      );
      const series = responseSeries.data.results.slice(0, ITEMS_PER_ROW);

      actions.setPopularMovies(movies);
      actions.setPopularSeries(series);
    } catch (error) {
      console.error("Error al obtener películas o series populares:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [actions, currentPage]);

  return (
    <div className="container-fluid bg-black text-center">
      <GuideSection />
      <section>
        <h2 className="text-white">Películas Populares</h2>
        <div className="row justify-content-center">
          {store.popularMovies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-white mt-4">Series Populares</h2>
        <div className="row justify-content-center">
          {store.popularSeries.map(series => (
            <Series key={series.id} series={series} />
          ))}
        </div>
      </section>
    </div>
  );
};
