import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from "react-scroll";
import '../scss/Header.scss';
import common from '../data/common';
import language from '../data/info';
import Navbar from './Navbar';
import { IoIosArrowDropdown } from 'react-icons/io';
const { name } = common;
const { contact } = language.menu;

export default class Header extends Component {
	render() {
		return (
			<div className="App-header">
				<h1 className='heading-background'>CREATIVE</h1>
				<header>
					<h1><Fade bottom cascade>{name}</Fade></h1>
					<Navbar selectedLang={this.props.selectedLang} changeSelectedLang={this.props.changeSelectedLang}
						navRef={this.props.navRef} menu={this.props.menu} />
				</header>
				<Fade bottom>
					<p className='header-title'>
						{language.headerTagline[this.props.selectedLang].map(h => `${h}\n`)}
						<button>
							<Link to="contact" smooth={true} offset={-70} duration={500}>
								{contact[this.props.selectedLang]}
							</Link>
						</button>
					</p>
				</Fade>
				<div className="scrollIndicator">
					<Link to="work" smooth={true} offset={-70} duration={500}>
						<IoIosArrowDropdown />
					</Link>
				</div>
			</div >
		);
	}
};