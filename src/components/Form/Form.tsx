import { useEffect, useState } from "react";
import "./Form.css";
import Data from "./Data";
import "./Conexion.css";

const API_URL = "http://localhost:3010/";

const loginData = {
  email: "vnavarro@ceti.mx",
  password: "1234",
};

function Form() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showData, setShowData] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const userInStorageString = window.localStorage.getItem("user");
    if (userInStorageString) {
      const userInStorage = JSON.parse(userInStorageString);
      setUser(userInStorage);
    }
  }, []);

  const handleOnEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleOnPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleOnClick = () => {
    //logIn({ email, password });
    fetchMovie();
    /*if (showData) {
      setEmail("");
      setPassword("");
      setShowData(false);
    } else if (email === loginData.email && password === loginData.password) {
      setShowData(true);
    } else {
      setEmail("");
      setPassword("");
      setShowData(false);
      alert("Información incorrecta, vuelva a intentarlo...");
    }*/
  };

  const logIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const reponse = await fetch("http://localhost:3010/api/v1/Auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (reponse.status === 200) {
        const data = await reponse.json();
        setUser(data);
        window.localStorage.setItem("user", JSON.stringify(data));
      } else {
        alert("Usuario o Constraseña incorrectos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovie = async () => {
    try {
      const token = user.token;
      const token2 =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWUyODU1ZjBiZDdlYTE5YWEyMDNjY2UiLCJpYXQiOjE3MDkzNTMzMTV9.3Y8RL6VSdcUvHN2Q0bnyh6pj92L46ZwScn4d0grdAtw";
      const response = await fetch("http://localhost:3010/api/v1/movies", {
        headers: {
          // prettier-ignore
          'Authorization': `Bearer ${token2}`,
        },
      });
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {movie && (
        <section className="movieContainer">
          <h2>Películas</h2>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Duración</th>
                <th>Director</th>
                <th>Reparto</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {movie.map((movies: any) => (
                <tr key={movies.title}>
                  <td>{movies.title}</td>
                  <td>{movies.duration}</td>
                  <td>{movies.director}</td>
                  <td>{movies.cast}</td>
                  <td>{movies.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      <Data email={email} password={password} showData={showData} />
      <section className="formContainer">
        <span className="inputContainer">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleOnEmailChange}
          />
        </span>
        <span className="inputContainer">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleOnPasswordChange}
          />
        </span>
        <br></br>
        <button onClick={handleOnClick}>
          {showData ? "Limpiar" : "Ingresar"}
        </button>
      </section>
    </>
  );
}

export default Form;
