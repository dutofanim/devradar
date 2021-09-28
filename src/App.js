import React, { useState, useEffect } from 'react';

import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

function App() {
  const [gitUserName, setGitUserName] = useState('');
  const [userTechs, setUserTechs] = useState('');
  const [gitUserLink, setGitUserLink] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => {
        console.log(error);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="gitUserName">Github username</label>
            <input 
                name="gitUserName" 
                id="gitUserName" 
                required 
                value={gitUserName} 
                onChange={e => setGitUserName(e.target.value)}
              />
          </div>

          <div className="input-block">
            <label htmlFor="userTechs">Techs</label>
            <input 
              name="userTechs" 
              id="userTechs" 
              required 
              value={userTechs} 
              onChange={e => setUserTechs(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="gitUserLink">Github Link</label>
            <input 
              name="gitUserLink" 
              id="gitUserLink" 
              required 
              value={gitUserLink} 
              onChange={e => setGitUserLink(e.target.value)}
              />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number" 
                name="latitude" 
                id="latitude" 
                required value={latitude}
                onChange={e => setLatitude(e.target.value)}
                />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required value={longitude} 
                onChange={e => setLongitude(e.target.value)}
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
              <img src="https://avatars.githubusercontent.com/u/39578998?v=4" alt="foto do perfil dutofanim" />
              <div className="user-info">
                <strong>Carlos Eduardo Tofanim</strong>
                <span>HTML5, CSS3, JavaScript, C and C++</span>
              </div>
            </header>
            <p>Teste de escrita da bio. Texto somente para encher o espaço.</p>
            <a href="https://github.com/dutofanim" rel="noreferrer" target="_blank">Acessar o perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/39578998?v=4" alt="foto do perfil dutofanim" />
              <div className="user-info">
                <strong>Carlos Eduardo Tofanim</strong>
                <span>HTML5, CSS3, JavaScript, C and C++</span>
              </div>
            </header>
            <p>Teste de escrita da bio. Texto somente para encher o espaço.</p>
            <a href="https://github.com/dutofanim" rel="noreferrer" target="_blank">Acessar o perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/39578998?v=4" alt="foto do perfil dutofanim" />
              <div className="user-info">
                <strong>Carlos Eduardo Tofanim</strong>
                <span>HTML5, CSS3, JavaScript, C and C++</span>
              </div>
            </header>
            <p>Teste de escrita da bio. Texto somente para encher o espaço.</p>
            <a href="https://github.com/dutofanim" rel="noreferrer" target="_blank">Acessar o perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/39578998?v=4" alt="foto do perfil dutofanim" />
              <div className="user-info">
                <strong>Carlos Eduardo Tofanim</strong>
                <span>HTML5, CSS3, JavaScript, C and C++</span>
              </div>
            </header>
            <p>Teste de escrita da bio. Texto somente para encher o espaço.</p>
            <a href="https://github.com/dutofanim" rel="noreferrer" target="_blank">Acessar o perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/39578998?v=4" alt="foto do perfil dutofanim" />
              <div className="user-info">
                <strong>Carlos Eduardo Tofanim</strong>
                <span>HTML5, CSS3, JavaScript, C and C++</span>
              </div>
            </header>
            <p>Teste de escrita da bio. Texto somente para encher o espaço.</p>
            <a href="https://github.com/dutofanim" rel="noreferrer" target="_blank">Acessar o perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/39578998?v=4" alt="foto do perfil dutofanim" />
              <div className="user-info">
                <strong>Carlos Eduardo Tofanim</strong>
                <span>HTML5, CSS3, JavaScript, C and C++</span>
              </div>
            </header>
            <p>Teste de escrita da bio. Texto somente para encher o espaço.</p>
            <a href="https://github.com/dutofanim" rel="noreferrer" target="_blank">Acessar o perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/39578998?v=4" alt="foto do perfil dutofanim" />
              <div className="user-info">
                <strong>Carlos Eduardo Tofanim</strong>
                <span>HTML5, CSS3, JavaScript, C and C++</span>
              </div>
            </header>
            <p>Teste de escrita da bio. Texto somente para encher o espaço.</p>
            <a href="https://github.com/dutofanim" rel="noreferrer" target="_blank">Acessar o perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/39578998?v=4" alt="foto do perfil dutofanim" />
              <div className="user-info">
                <strong>Carlos Eduardo Tofanim</strong>
                <span>HTML5, CSS3, JavaScript, C and C++</span>
              </div>
            </header>
            <p>Teste de escrita da bio. Texto somente para encher o espaço.</p>
            <a href="https://github.com/dutofanim" rel="noreferrer" target="_blank">Acessar o perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/39578998?v=4" alt="foto do perfil dutofanim" />
              <div className="user-info">
                <strong>Carlos Eduardo Tofanim</strong>
                <span>HTML5, CSS3, JavaScript, C and C++</span>
              </div>
            </header>
            <p>Teste de escrita da bio. Texto somente para encher o espaço.</p>
            <a href="https://github.com/dutofanim" rel="noreferrer" target="_blank">Acessar o perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/39578998?v=4" alt="foto do perfil dutofanim" />
              <div className="user-info">
                <strong>Carlos Eduardo Tofanim</strong>
                <span>HTML5, CSS3, JavaScript, C and C++</span>
              </div>
            </header>
            <p>Teste de escrita da bio. Texto somente para encher o espaço.</p>
            <a href="https://github.com/dutofanim" rel="noreferrer" target="_blank">Acessar o perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/39578998?v=4" alt="foto do perfil dutofanim" />
              <div className="user-info">
                <strong>Carlos Eduardo Tofanim</strong>
                <span>HTML5, CSS3, JavaScript, C and C++</span>
              </div>
            </header>
            <p>Teste de escrita da bio. Texto somente para encher o espaço.</p>
            <a href="https://github.com/dutofanim" rel="noreferrer" target="_blank">Acessar o perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/39578998?v=4" alt="foto do perfil dutofanim" />
              <div className="user-info">
                <strong>Carlos Eduardo Tofanim</strong>
                <span>HTML5, CSS3, JavaScript, C and C++</span>
              </div>
            </header>
            <p>Teste de escrita da bio. Texto somente para encher o espaço.</p>
            <a href="https://github.com/dutofanim" rel="noreferrer" target="_blank">Acessar o perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
