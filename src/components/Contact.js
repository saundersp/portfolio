import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaRegFilePdf } from 'react-icons/fa';
import '../scss/Contact.scss';
import common from '../data/common';
import { useLang } from '../services/LanguageService';
import { loadResource, createElementLink } from './../toolbox';

const loadCV = (lang: string) => loadResource(`CV/CV Pierre Saunders - ${lang}.pdf`);

export default function Contact() {
	const { t, getLangCode } = useLang();
	const [CV, setCV] = useState(null);

	useEffect(() => {
		let isMounted = true;
		(async () => {
			const cv = await loadCV(getLangCode());
			if (isMounted)
				setCV(cv);
		})();
		return () => { isMounted = false; };
	}, [getLangCode])

	return (
		<Fade direction="left" duration={500} cascade triggerOnce>
			<div className='contact'>
				<h1>{t('menu.contact')}</h1>
				<div className='contact-content'>
					<ul>
						{common.social.map((link, index) => (
							<li key={index}>
								<a target='_blank' rel='noopener noreferrer' href={link.url}>
									<link.icon /> {link.name}
								</a>
							</li>
						))}
						<li>{createElementLink(FaRegFilePdf, CV, t('menu.CV'))}</li>
					</ul>
				</div>
			</div>
			<div className='footer'><p>{t('menu.credits')}</p></div>
		</Fade>
	);
}