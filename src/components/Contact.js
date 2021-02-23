import React, { createElement } from 'react';
import Fade from 'react-reveal/Fade';
import { FaRegFilePdf } from 'react-icons/fa';
import '../scss/Contact.scss';
import language from '../data/info';
import common from '../data/common';
const { contact, CV } = language.menu;
const { CV: CVlink } = language;

const createLink = (tag, href, title) => (
	<a target='_blank' rel='noopener noreferrer' href={href}>{createElement(tag)} {title}</a>
);

type ContactProps = {
	selectedLang: number
};
export default function Contact({ selectedLang }: ContactProps) {
	return (
		<Fade bottom cascade>
			<div className='contact'>
				<h1>{contact[selectedLang]}</h1>
				<div className='contact-content'>
					<ul>
						{common.social.map((link, index) => (
							<li key={index}>
								<a target='_blank' rel='noopener noreferrer' href={link.url}>
									<link.icon /> {link.name}
								</a>
							</li>
						))}
						<li>{createLink(FaRegFilePdf, CVlink[selectedLang], CV)}</li>
					</ul>
				</div>
			</div>
		</Fade>
	);
};