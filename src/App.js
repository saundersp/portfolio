import React, { useState, useRef, MouseEvent } from 'react'
import './scss/App.scss';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Fade from 'react-reveal/Fade';
import LanguageService from './services/LanguageService';

export default function App() {
	const [navOpened, setNavOpened] = useState(false);

	const menu = {
		show: (e: MouseEvent): void => {
			if (!navOpened) {
				const cl = menu.navRef.current.classList;
				cl.remove('hide-menu');
				cl.add('show-menu');
				e.stopPropagation();
				setNavOpened(true);
			}
		},

		hide: (e: MouseEvent): void => {
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
		<LanguageService>
			<div className='app' onClick={menu.hide}>
				<Fade bottom cascade>
					<Header menu={menu} />
					<Work />
					<About />
					<Contact />
				</Fade>
			</div>
		</LanguageService>
	);
}