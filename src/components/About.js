import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import '../scss/About.scss';
import language from '../data/info';
import common from '../data/common';
import Certificate from './Certificate';
const { aboutImage, name, certificates } = common;
const { aboutText, menu, certificateAccordion } = language;

type AboutProps = {
	selectedLang: number
};
export default function About({ selectedLang }: AboutProps) {
	const [imageLoadingError, setImageLoadingError] = useState(false);
	const [showAllCertificates, setShowAllCertificates] = useState(false);

	const imgNotFound = _ => setImageLoadingError(true);
	const toogleShowAllCertificates = _ => setShowAllCertificates(!showAllCertificates);

	return (
		<Fade bottom cascade>
			<div className='about'>
				<h1 className='heading'>{menu.about[selectedLang]}</h1>
				<div className='about-content'>
					<div className='description'>
						<p>{aboutText[selectedLang]}</p>
						<button className='showAllCertificates' onClick={toogleShowAllCertificates}>
							{showAllCertificates ? (<><BsChevronUp />{certificateAccordion[selectedLang].hide}<BsChevronUp /></>)
								: (<><BsChevronDown />{certificateAccordion[selectedLang].show(certificates.length - 3)}<BsChevronDown /></>)}
						</button>
						<div className='certificates-content'>
							{certificates.reduce((tab, certificate, index) => {
								if (index < 3 || showAllCertificates)
									tab.push(<Certificate key={index} certificate={certificate} />);
								return tab;
							}, [])}
						</div>
					</div>
					{(aboutImage && !imageLoadingError) &&
						<img decoding='async' src={aboutImage} alt={name} onError={imgNotFound} />}
				</div>
			</div>
		</Fade >
	);
};