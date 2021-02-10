import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../scss/About.scss';
import language from '../data/info';
import common from '../data/common';
import Certificate from './Certificate';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
const { aboutImage, name, certificates } = common;
const { aboutText, menu, certificateAccordion } = language;


export default class About extends Component {
	props: {
		selectedLang: any
	};

	state = {
		imageLoadingError: false,
		showAllCertificates: false
	};

	imgNotFound = _ => this.setState({ imageLoadingError: true });
	showAllCertificates = _ => this.setState({ showAllCertificates: !this.state.showAllCertificates });

	render() {
		const { selectedLang } = this.props;
		const { imageLoadingError, showAllCertificates } = this.state;
		return (
			<Fade bottom cascade>
				<div className='about'>
					<h1 className="heading">{menu.about[selectedLang]}</h1>
					<div className='about-content'>
						<div className="description">
							<p>{aboutText[selectedLang]}</p>
							<button className="showAllCertificates" onClick={this.showAllCertificates}>
								{showAllCertificates ? (<><BsChevronUp />{certificateAccordion[selectedLang].hide}<BsChevronUp /></>)
									: (<><BsChevronDown />{certificateAccordion[selectedLang].show(certificates.length - 3)}<BsChevronDown /></>)}
							</button>
							<div className="certificates-content">
								{certificates.reduce((tab, certificate, index) => {
									if (index < 3 || showAllCertificates)
										tab.push(<Certificate key={index} certificate={certificate} />);
									return tab;
								}, [])}
							</div>
						</div>
						{(aboutImage && !imageLoadingError) &&
							<img decoding="async" src={aboutImage} alt={name} onError={this.imgNotFound} />}
					</div>
				</div>
			</Fade>
		);
	}
};