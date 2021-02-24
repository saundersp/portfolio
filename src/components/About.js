import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import '../scss/About.scss';
import common from '../data/common';
import Certificate from './Certificate';
import { useLang } from '../services/LanguageService';
const { aboutImage, name, certificates } = common;

export default function About() {
	const { t } = useLang();
	const [imageLoadingError, setImageLoadingError] = useState(false);
	const [showAllCertificates, setShowAllCertificates] = useState(false);
	const { hide, show } = t("certificateAccordion");

	return (
		<Fade bottom cascade>
			<div className='about'>
				<h1 className='heading'>{t('menu.about')}</h1>
				<div className='about-content'>
					<div className='description'>
						<p>{t('aboutText')}</p>
						<button className='showAllCertificates' onClick={_ => setShowAllCertificates(!showAllCertificates)}>
							{showAllCertificates ? (<><BsChevronUp />{hide}<BsChevronUp /></>)
								: (<><BsChevronDown />{show(certificates.length - 3)}<BsChevronDown /></>)}
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
						<img decoding='async' src={aboutImage} alt={name} onError={_ => setImageLoadingError(true)} />}
				</div>
			</div>
		</Fade >
	);
}