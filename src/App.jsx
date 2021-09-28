import { useState, useRef } from 'react';
import './scss/App.scss';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import LanguageService from './services/LanguageService';
import info from './data/info';

export default function App() {
	const [navOpened, setNavOpened] = useState(false);

	const menu = {
		show: e => {
			if (!navOpened) {
				const cl = menu.navRef.current.classList;
				cl.remove('hide-menu');
				cl.add('show-menu');
				e.stopPropagation();
				setNavOpened(true);
			}
		},

		hide: e => {
			if (navOpened) {
				const cl = menu.navRef.current.classList;
				cl.remove('show-menu');
				cl.add('hide-menu');
				setTimeout(_ => cl.remove('hide-menu'), 600);
				e.stopPropagation();
				setNavOpened(false);
			}
		},
		navRef: useRef(null)
	};

	return (
		<LanguageService availableLangs={info.languages.map(e => e.code)}>
			<div className='app' onClick={menu.hide}>
				<Header menu={menu} />
				<Work />
				<About />
				<Contact />
			</div>
		</LanguageService>
	);
}
