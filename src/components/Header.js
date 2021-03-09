import React, { MouseEvent } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';
import '../scss/Header.scss';
import { useLang } from '../services/LanguageService';
import common from '../data/common';
import Navbar from './Navbar';
const { name } = common;

type HeaderProps = { menu: { show(e: MouseEvent): void, hide(e: MouseEvent): void, navRef: any }, };
export default function Header({ menu }: HeaderProps) {
	const { t } = useLang();
	return (
		<div className='App-header'>
			<h1 className='heading-background'>CREATIVE</h1>
			<header>
				<h1><Fade direction="left" duration={200} cascade triggerOnce>
					{name}
				</Fade></h1>
				<Navbar menu={menu} />
			</header>
			<Fade direction="left" duration={200} cascade triggerOnce>
				<p className='header-title'>
					{t('headerTagline').map(h => `${h}\n`)}
					<button>
						<Link to='contact' smooth offset={-70} duration={500}>
							{t('menu.contact')}
						</Link>
					</button>
				</p>
			</Fade>
			<div className='scrollIndicator'>
				<Link to='work' smooth offset={-70} duration={500}>
					<IoIosArrowDropdown />
				</Link>
			</div>
		</div >
	);
}