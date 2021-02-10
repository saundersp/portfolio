import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../scss/Contact.scss';
import { FaRegFilePdf } from 'react-icons/fa';
import language from '../data/info';
import common from '../data/common';
const { approach, contact, CV } = language.menu;
const { CV: CVlink } = language;

export default class Contact extends Component {
	props: {
		selectedLang: string
	};

	render() {
		return (
			<Fade bottom cascade>
				<div className="contact">
					<h1>{contact[this.props.selectedLang]}</h1>
					<div className='contact-content'>
						<h3>{approach[this.props.selectedLang]}</h3>
						<ul>
							{common.social.map((link, index) => (
								<li key={index}>
									<a target='_blank' rel="noopener noreferrer" href={link.url}><link.icon /> {link.name}</a>
								</li>
							))}
							<li>
								<a target='_blank' rel="noopener noreferrer" href={CVlink[this.props.selectedLang]}><FaRegFilePdf /> {CV}</a>
							</li>
						</ul>
					</div>
				</div>
			</Fade>
		);
	}
};