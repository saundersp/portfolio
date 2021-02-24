import React, { MouseEvent } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { GrClose } from 'react-icons/gr';
import '../scss/Navbar.scss';
import { useLang } from '../services/LanguageService';
import common from '../data/common';
const { languages } = common;

type NavbarProps = {
	menu: {
		show(e: MouseEvent): void,
		hide(e: MouseEvent): void,
		navRef: any
	},
};
export default function Navbar({ menu }: NavbarProps) {
	const { t, changeLang } = useLang();
	return (
		<nav>
			<div className='show-mobile ham' onClick={menu.show}><GiHamburgerMenu /></div>
			<ul className='show-desktop' ref={menu.navRef}>
				<li className='closeBtn'><div onClick={menu.hide}><GrClose color='#FFFFFFBB' /></div></li>
				<li><Link className='link' activeClass='active' to='App-header'
					spy={true} smooth={true} offset={-70} duration={500}>
					<Fade bottom cascade>{t('menu.home')}</Fade>
				</Link></li>
				<li><Link className='link' activeClass='active' to='work'
					spy={true} smooth={true} offset={-70} duration={500}>
					<Fade bottom cascade>{t('menu.work')}</Fade>
				</Link></li>
				<li><Link className='link' activeClass='active' to='about'
					spy={true} smooth={true} offset={-70} duration={500}>
					<Fade bottom cascade>{t('menu.about')}</Fade>
				</Link></li>
				<li><Link className='link' activeClass='active' to='contact'
					spy={true} smooth={true} offset={-70} duration={500}>
					<Fade bottom cascade>{t('menu.contact')}</Fade>
				</Link></li>
				<li className='langs'>
					{languages.map((lang, index) =>
						<button key={index} onClick={_ => changeLang(index)}>
							<img src={`https://www.countryflags.io/${lang.code}/flat/64.png`} alt={lang.name} />
						</button>
					)}
				</li>
			</ul>
		</nav >
	);
}