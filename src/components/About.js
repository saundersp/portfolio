import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../scss/About.scss';
import language from '../data/info';
import common from '../data/common';
import Certificate from './Certificate';
const { aboutImage, name, certificates } = common;
const { aboutText, menu } = language;

export default class About extends Component {
	state = {
		imageLoadingError: false
	};

	imgNotFound = _ => this.setState({ imageLoadingError: true });

	render() {
		return (
			<Fade bottom cascade>
				<div className='about'>
					<h1 className="heading">{menu.about[this.props.selectedLang]}</h1>
					<div className='about-content'>
						<div className="description">
							<p>{aboutText[this.props.selectedLang]}</p>
							<div className="certificates-content">
								{certificates.map((certificate, index) => <Certificate key={index} certificate={certificate} />)}
							</div>
						</div>
						{(aboutImage && !this.state.imageLoadingError) &&
							<img decoding="async" src={aboutImage} alt={name} onError={this.imgNotFound} />}
					</div>
				</div>
			</Fade>
		);
	}
};