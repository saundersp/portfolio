import React, { MouseEvent } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import '../scss/Header.scss';
import { useLang } from '../services/LanguageService';
import common from '../data/common';
import Navbar from './Navbar';
const { name } = common;

type HeaderProps = {
	menu: {
		show(e: MouseEvent): void,
		hide(e: MouseEvent): void,
		navRef: any
	},
};
export default function Header({ menu }: HeaderProps) {
	const { t } = useLang();
	return (
		<div className='App-header'>
			<h1 className='heading-background'>CREATIVE</h1>
			<header>
				<h1><Fade bottom cascade>{name}</Fade></h1>
				<Navbar menu={menu} />
			</header>
			<Fade bottom>
				<p className='header-title'>
					{t('headerTagline').map(h => `${h}\n`)}
					<button>
						<Link to='contact' smooth={true} offset={-70} duration={500}>
							{t('menu.contact')}
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
}