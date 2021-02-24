import React, { createElement } from 'react';
import Fade from 'react-reveal/Fade';
import { FaRegFilePdf } from 'react-icons/fa';
import '../scss/Contact.scss';
import common from '../data/common';
import { useLang } from '../services/LanguageService';

const createLink = (tag, href, title) => (
	<a target='_blank' rel='noopener noreferrer' href={href}>{createElement(tag)} {title}</a>
);

export default function Contact() {
	const { t } = useLang();
	return (
		<Fade bottom cascade>
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
						<li>{createLink(FaRegFilePdf, t('CV'), t('menu.CV'))}</li>
					</ul>
				</div>
			</div>
			<div className='footer'><p>{t('menu.credits')}</p></div>
		</Fade>
	);
}