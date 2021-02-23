import React, { Dispatch, SetStateAction } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import '../scss/Header.scss';
import common from '../data/common';
import language from '../data/info';
import Navbar from './Navbar';
const { name } = common;
const { contact } = language.menu;

type HeaderProps = {
	selectedLang: number,
	menu: {
		show(e: any): void,
		hide(e: any): void
	},
	navRef: any,
	changeSelectedLang: Dispatch<SetStateAction<number>>
};
export default function Header({ selectedLang, menu, navRef, changeSelectedLang }: HeaderProps) {
	return (
		<div className='App-header'>
			<h1 className='heading-background'>CREATIVE</h1>
			<header>
				<h1><Fade bottom cascade>{name}</Fade></h1>
				<Navbar selectedLang={selectedLang} changeSelectedLang={changeSelectedLang} navRef={navRef} menu={menu} />
			</header>
			<Fade bottom>
				<p className='header-title'>
					{language.headerTagline[selectedLang].map(h => `${h}\n`)}
					<button>
						<Link to='contact' smooth={true} offset={-70} duration={500}>
							{contact[selectedLang]}
						</Link>
					</button>
				</p>
			</Fade>
			<div className='scrollIndicator'>
				<Link to='work' smooth={true} offset={-70} duration={500}>
					<IoIosArrowDropdown />
				</Link>
			</div>
		</div >
	);
};