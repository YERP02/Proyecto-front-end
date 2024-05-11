import React, { useState, useEffect } from "react";
import "./Conexion.css";

const API_URL = "http://localhost:3010/";

function MostrarPelicula() {
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:3010/api/v1/movies/findSecondMovie")
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);

  return (
    <>
      <div className="movieContainer">
        <h2>Peliculas</h2>
        {movie ? (
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Duracion</th>
                <th>Director</th>
                <th>Categoria</th>
                <th>Cast</th>
                <th>Descripcion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{movie.title}</td>
                <td>{movie.duration}</td>
                <td>{movie.director}</td>
                <td>{movie.category}</td>
                <td>{movie.cast}</td>
                <td>{movie.description}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
            
    </>
  );
}

export default MostrarPelicula;
