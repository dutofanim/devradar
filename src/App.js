import React from 'react';

import './global.css';
import './app.css';
import './sidebar.css';

function App() {


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div className="input-block">
            <label htmlFor="gitUserName">Github username</label>
            <input name="gitUserName" id="gitUserName" required />
          </div>

          <div className="input-block">
            <label htmlFor="userTechs">Techs</label>
            <input name="userTechs" id="userTechs" required />
          </div>

          <div className="input-block">
            <label htmlFor="gitUserLink">Github Link</label>
            <input name="gitUserLink" id="gitUserLink" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
