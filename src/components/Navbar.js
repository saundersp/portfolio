import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from "react-scroll";
import '../scss/Navbar.scss';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import language from '../data/info';
import common from '../data/common';
const { home, work, about, contact } = language.menu;
const { languages } = common;

export default class Navbar extends Component {

	render() {
		return (
			<nav>
				<div className="show-mobile ham" onClick={this.props.menu.show}>
					<GiHamburgerMenu />
				</div>
				<ul className="show-desktop" ref={this.props.navRef}>
					<li className="closeBtn"><div onClick={this.props.menu.hide}><GrClose color="#FFFFFFBB" /></div></li>
					<li>
						<Link className='link' activeClass="active" to="App-header"
							spy={true} smooth={true} offset={-70}
							duration={500}>
							<Fade bottom cascade>{home[this.props.selectedLang]}</Fade>
						</Link>
					</li>
					<li>
						<Link className='link' activeClass="active" to="work"
							spy={true} smooth={true} offset={-70}
							duration={500}>
							<Fade bottom cascade>{work[this.props.selectedLang]}</Fade>
						</Link>
					</li>
					<li>
						<Link className='link' activeClass="active" to="about"
							spy={true} smooth={true} offset={-70}
							duration={500}>
							<Fade bottom cascade>{about[this.props.selectedLang]}</Fade>
						</Link>
					</li>
					<li>
						<Link className='link' activeClass="active" to="contact"
							spy={true} smooth={true} offset={-70}
							duration={500}>
							<Fade bottom cascade>{contact[this.props.selectedLang]}</Fade>
						</Link>
					</li>
					<li className="langs">
						{languages.map((lang, index) =>
							<button key={index} onClick={_ => this.props.changeSelectedLang(index)}>
								<img src={`https://www.countryflags.io/${lang.code}/flat/64.png`} alt={lang.name} />
							</button>
						)}
					</li>
				</ul>
			</nav >
		);
	}
};