import React, { useState, useRef } from 'react'
import './scss/App.scss';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Fade from 'react-reveal/Fade';
import data from './data/info';
const { credits } = data.menu;

export default function App() {
	const [navOpened, setNavOpened] = useState(false);
	const [selectedLang, setSelectedLang] = useState(0);
	const navRef = useRef(null);

	const menu = {
		show: e => {
			if (!navOpened) {
				const cl = navRef.current.classList;
				cl.remove('hide-menu');
				cl.add('show-menu');
				e.stopPropagation();
				setNavOpened(true);
			}
		},

		hide: e => {
			if (navOpened) {
				const cl = navRef.current.classList;
				cl.remove('show-menu');
				cl.add('hide-menu');
				setTimeout(_ => cl.remove('hide-menu'), 600);
				e.stopPropagation();
				setNavOpened(false);
			}
		}
	};

	return (
		<div className='app' onClick={menu.hide}>
			<Fade bottom cascade>
				<Header selectedLang={selectedLang} changeSelectedLang={setSelectedLang}
					navRef={navRef} menu={menu} />
				<Work selectedLang={selectedLang} />
				<About selectedLang={selectedLang} />
				<Contact selectedLang={selectedLang} />
				<div className='footer'><p>{credits[selectedLang]}</p></div>
			</Fade>
		</div>
	);
};