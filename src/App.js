import React, { Component, createRef } from 'react'
import './scss/App.scss';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Fade from 'react-reveal/Fade';
import data from './data/info';
const { credits } = data.menu;

export default class App extends Component {

	state = {
		navOpened: false,
		selectedLang: 0,
		navRef: createRef()
	}

	menu = {
		show: e => {
			if (!this.state.navOpened) {
				const cl = this.state.navRef.current.classList;
				cl.remove("hide-menu");
				cl.add("show-menu");
				e.stopPropagation();
				this.setState({ navOpened: true });
			}
		},

		hide: e => {
			if (this.state.navOpened) {
				const cl = this.state.navRef.current.classList;
				cl.remove("show-menu");
				cl.add("hide-menu");
				setTimeout(_ => cl.remove("hide-menu"), 600);
				e.stopPropagation();
				this.setState({ navOpened: false });
			}
		}
	}

	changeSelectedLang = index => {
		this.setState({ selectedLang: index });
	};

	render() {
		return (
			<div className="app" onClick={this.menu.hide}>
				<Fade bottom cascade>
					<Header selectedLang={this.state.selectedLang} changeSelectedLang={this.changeSelectedLang}
						navRef={this.state.navRef} menu={this.menu} />
					<Work selectedLang={this.state.selectedLang} />
					<About selectedLang={this.state.selectedLang} />
					<Contact selectedLang={this.state.selectedLang} />
					<div className='footer'>
						<p>{credits[this.state.selectedLang]}</p>
					</div>
				</Fade>
			</div>
		)
	}
}
