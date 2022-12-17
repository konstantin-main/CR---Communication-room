import './App.css';

const App = () => {
	return (
		<div className="App">
			<header className="header">
				<img
					className="header__logo"
					src="https://cdn.icon-icons.com/icons2/3626/PNG/512/doctor_medicine_heh_hospital_care_customer_icon_227299.png"
					alt="react-logo"
				/>
				<p>CR-communicated room</p>
			</header>
			<div className="main">
				<aside className="side-bar">
					<nav>
						<ul className="side-bar__menu">
							<li className="side-bar__menu-item">
								<a
									href="#"
									className="side-bar__menu-item-text side-bar__menu-item-text_header"
								>
									Menu
								</a>
							</li>
							<li className="side-bar__menu-item">
								<a href="#" className="side-bar__menu-item-text">
									News
								</a>
							</li>
							<li className="side-bar__menu-item">
								<a href="#" className="side-bar__menu-item-text">
									Messages
								</a>
							</li>
							<li className="side-bar__menu-item">
								<a href="#" className="side-bar__menu-item-text">
									Music
								</a>
							</li>
							<li className="side-bar__menu-item">
								<a href="#" className="side-bar__menu-item-text">
									profile
								</a>
							</li>
							<li className="side-bar__menu-item">
								<a href="#" className="side-bar__menu-item-text">
									Settings
								</a>
							</li>
						</ul>
					</nav>
				</aside>
				<section class="profile">
					<div class="profile__header">
						<div className="background-gradient"></div>
						<img
							src="http://goodnewsanimal.ru/_nw/72/23941244.jpg"
							alt="A dog"
							class="profile__header-avatar"
						/>
					</div>
					<ul class="profile__info">
						<li className="profile__info-item">
							<p className="profile__info-item_status">
								Имя:
								<span className="status__mean"> Костя</span>
							</p>
						</li>
						<li className="profile__info-item">
							<p className="profile__info-item_status">
								Статус:
								<span className="status__mean"> Я жирный</span>
							</p>
						</li>
						<li className="profile__info-item">
							<p className="profile__info-item_status">
								Год Рождения:
								<span className="status__mean"> 1200г</span>
							</p>
						</li>
						<li className="profile__info-item">
							<p className="profile__info-item_status">
								Знак зодиака:
								<span className="status__mean"> Лев</span>
							</p>
						</li>
						<li className="profile__info-item">
							<p className="profile__info-item_status">
								Образование:
								<span className="status__mean"> СДЮШОР № 337</span>
							</p>
						</li>
					</ul>
					<div class="profile__stand">
						<h1 className="profile__stand-title">Мои новости</h1>
						<input
							type="text"
							class="profile__stand-input"
							placeholder="Что нового?"
						/>
						<div className="profile__stand-news">
							<div className="stand-news__item">
								<img
									src="http://goodnewsanimal.ru/_nw/72/23941244.jpg"
									alt="A dog"
									id="stand-news__avatar"
									class="profile__header-avatar"
								/>
								<p className="stand-news__text">АУУУУУ, где все????</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default App;
