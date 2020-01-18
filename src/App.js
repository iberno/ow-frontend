import React from 'react';
import './css/global.css'
import './css/App.css'
import './css/Sidebar.css'
import './css/Main.css'

function App() {
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Techs</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="latitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/3433712?s=460&v=4" alt="Iberno Hoffmann"/>
              <div className="user-info">
                <strong>Iberno Hoffmann</strong>
                <span>ReactJS, React Native, NodeJs</span>
              </div>
            </header>
            <p className='bio'>I'm Brazilian, and i love code.</p>
            <a href="https://github.com/iberno">Acessar perfil github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/3433712?s=460&v=4" alt="Iberno Hoffmann"/>
              <div className="user-info">
                <strong>Iberno Hoffmann</strong>
                <span>ReactJS, React Native, NodeJs</span>
              </div>
            </header>
            <p className='bio'>I'm Brazilian, and i love code.</p>
            <a href="https://github.com/iberno">Acessar perfil github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/3433712?s=460&v=4" alt="Iberno Hoffmann"/>
              <div className="user-info">
                <strong>Iberno Hoffmann</strong>
                <span>ReactJS, React Native, NodeJs</span>
              </div>
            </header>
            <p className='bio'>I'm Brazilian, and i love code.</p>
            <a href="https://github.com/iberno">Acessar perfil github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/3433712?s=460&v=4" alt="Iberno Hoffmann"/>
              <div className="user-info">
                <strong>Iberno Hoffmann</strong>
                <span>ReactJS, React Native, NodeJs</span>
              </div>
            </header>
            <p className='bio'>I'm Brazilian, and i love code.</p>
            <a href="https://github.com/iberno">Acessar perfil github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
