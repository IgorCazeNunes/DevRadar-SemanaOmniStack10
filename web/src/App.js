import React from 'react';

import'./global.css';
import'./App.css';
import'./Sidebar.css';
import'./Main.css';

function App() {
	return (
		<div id="app">
			<aside>
				<strong>Cadastrar</strong>

				<form>
					<div class="input-block">
						<label htmlFor="github_username">Usuário do Github</label>
						<input name="github_username" id="github_username" required />
					</div>

					<div class="input-block">
						<label htmlFor="techs">Tecnologias</label>
						<input name="techs" id="techs" required />
					</div>

					<div className="input-group">
						<div class="input-block">
							<label htmlFor="latitude">Latitude</label>
							<input name="latitude" id="latitude" required />
						</div>
						
						<div class="input-block">
							<label htmlFor="longitude">Longitude</label>
							<input name="longitude" id="longitude" required />
						</div>
					</div>

					<button type="submit">Salvar</button>
				</form>
			</aside>

			<main>
				<ul>
					<li className="dev-item">
						<header>
							<img src="https://avatars0.githubusercontent.com/u/30866274?s=460&v=4" alt="Igor Cazé Nunes" />

							<div className="user-info">
								<strong>Igor Cazé Nunes</strong>
								<span>Spring, Spring.Boot, Angular</span>
							</div>
						</header>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iure facilis magni repellendus inventore cum quo culpa dicta blanditiis nulla, sed earum nemo? Esse quae dolorem recusandae consequuntur sequi. Autem.
						</p>

						<a href="https://github.com/IgorCazeNunes">Acessar perfil no Github</a>
					</li>
					
					<li className="dev-item">
						<header>
							<img src="https://avatars0.githubusercontent.com/u/30866274?s=460&v=4" alt="Igor Cazé Nunes" />

							<div className="user-info">
								<strong>Igor Cazé Nunes</strong>
								<span>Spring, Spring.Boot, Angular</span>
							</div>
						</header>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iure facilis magni repellendus inventore cum quo culpa dicta blanditiis nulla, sed earum nemo? Esse quae dolorem recusandae consequuntur sequi. Autem.
						</p>

						<a href="https://github.com/IgorCazeNunes">Acessar perfil no Github</a>
					</li>
					
					<li className="dev-item">
						<header>
							<img src="https://avatars0.githubusercontent.com/u/30866274?s=460&v=4" alt="Igor Cazé Nunes" />

							<div className="user-info">
								<strong>Igor Cazé Nunes</strong>
								<span>Spring, Spring.Boot, Angular</span>
							</div>
						</header>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iure facilis magni repellendus inventore cum quo culpa dicta blanditiis nulla, sed earum nemo? Esse quae dolorem recusandae consequuntur sequi. Autem.
						</p>

						<a href="https://github.com/IgorCazeNunes">Acessar perfil no Github</a>
					</li>
					
					<li className="dev-item">
						<header>
							<img src="https://avatars0.githubusercontent.com/u/30866274?s=460&v=4" alt="Igor Cazé Nunes" />

							<div className="user-info">
								<strong>Igor Cazé Nunes</strong>
								<span>Spring, Spring.Boot, Angular</span>
							</div>
						</header>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iure facilis magni repellendus inventore cum quo culpa dicta blanditiis nulla, sed earum nemo? Esse quae dolorem recusandae consequuntur sequi. Autem.
						</p>

						<a href="https://github.com/IgorCazeNunes">Acessar perfil no Github</a>
					</li>
				</ul>
			</main>
		</div>
	);
}

export default App;
