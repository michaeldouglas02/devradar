import React, { useState, useEffect } from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required value={latitude} />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                required
                value={longitude}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/43655755?s=460&v=4"
                alt="Michael Douglas"
              />
              <div className="user-info">
                <strong>Michael Douglas</strong>
                <span>ReactJS, React Native, Node.Js</span>
              </div>
            </header>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              sapiente error voluptatem consectetur praesentium repellendus iste
              non sed quaerat! Nobis aperiam cum unde labore rem nulla corporis
              rerum aspernatur necessitatibus?
            </p>
            <a href="https://github.com/michaeldouglas02">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/43655755?s=460&v=4"
                alt="Michael Douglas"
              />
              <div className="user-info">
                <strong>Michael Douglas</strong>
                <span>ReactJS, React Native, Node.Js</span>
              </div>
            </header>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              sapiente error voluptatem consectetur praesentium repellendus iste
              non sed quaerat! Nobis aperiam cum unde labore rem nulla corporis
              rerum aspernatur necessitatibus?
            </p>
            <a href="https://github.com/michaeldouglas02">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/43655755?s=460&v=4"
                alt="Michael Douglas"
              />
              <div className="user-info">
                <strong>Michael Douglas</strong>
                <span>ReactJS, React Native, Node.Js</span>
              </div>
            </header>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              sapiente error voluptatem consectetur praesentium repellendus iste
              non sed quaerat! Nobis aperiam cum unde labore rem nulla corporis
              rerum aspernatur necessitatibus?
            </p>
            <a href="https://github.com/michaeldouglas02">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/43655755?s=460&v=4"
                alt="Michael Douglas"
              />
              <div className="user-info">
                <strong>Michael Douglas</strong>
                <span>ReactJS, React Native, Node.Js</span>
              </div>
            </header>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              sapiente error voluptatem consectetur praesentium repellendus iste
              non sed quaerat! Nobis aperiam cum unde labore rem nulla corporis
              rerum aspernatur necessitatibus?
            </p>
            <a href="https://github.com/michaeldouglas02">
              Acessar perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
