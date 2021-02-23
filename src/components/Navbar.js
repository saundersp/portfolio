import React, { Dispatch, SetStateAction } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { GrClose } from 'react-icons/gr';
import '../scss/Navbar.scss';
import language from '../data/info';
import common from '../data/common';
const { home, work, about, contact } = language.menu;
const { languages } = common;


type NavbarProps = {
	menu: {
		show(e: any): void,
		hide(e: any): void
	},
	selectedLang: number,
	navRef: any,
	changeSelectedLang: Dispatch<SetStateAction<number>>
};
export default function Navbar({ menu, selectedLang, navRef, changeSelectedLang }: NavbarProps) {
	return (
		<nav>
			<div className='show-mobile ham' onClick={menu.show}><GiHamburgerMenu /></div>
			<ul className='show-desktop' ref={navRef}>
				<li className='closeBtn'><div onClick={menu.hide}><GrClose color='#FFFFFFBB' /></div></li>
				<li><Link className='link' activeClass='active' to='App-header'
					spy={true} smooth={true} offset={-70} duration={500}>
					<Fade bottom cascade>{home[selectedLang]}</Fade>
				</Link></li>
				<li><Link className='link' activeClass='active' to='work'
					spy={true} smooth={true} offset={-70} duration={500}>
					<Fade bottom cascade>{work[selectedLang]}</Fade>
				</Link></li>
				<li><Link className='link' activeClass='active' to='about'
					spy={true} smooth={true} offset={-70} duration={500}>
					<Fade bottom cascade>{about[selectedLang]}</Fade>
				</Link></li>
				<li><Link className='link' activeClass='active' to='contact'
					spy={true} smooth={true} offset={-70} duration={500}>
					<Fade bottom cascade>{contact[selectedLang]}</Fade>
				</Link></li>
				<li className='langs'>
					{languages.map((lang, index) =>
						<button key={index} onClick={_ => changeSelectedLang(index)}>
							<img src={`https://www.countryflags.io/${lang.code}/flat/64.png`} alt={lang.name} />
						</button>
					)}
				</li>
			</ul>
		</nav >
	);
};