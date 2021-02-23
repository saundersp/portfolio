import React, { createElement, useState } from 'react';
import { FaGithub, FaRegPaperPlane, FaRegImage, FaDownload } from 'react-icons/fa';
import { IconType } from 'react-icons';
import Fade from 'react-reveal/Fade';
import '../scss/Project.scss';
import language from '../data/info';
const { liveDemo, download_link } = language.menu;

type ProjetProps = {
	project: {
		title: string,
		service: string[],
		desc: string[],
		techs: string[],
		imageIcon?: IconType,
		imageSrc?: string,
		url?: string,
		download_url?: string,
		src?: string
	},
	selectedLang: number
};
export default function Project({ project, selectedLang }: ProjetProps) {
	const [imageLoadingError, setImageLoadingError] = useState(false);

	const { url, imageSrc, title, service, desc, src, techs, download_url, imageIcon } = project;
	const image = imageSrc ?
		<img decoding='async' src={imageSrc} alt={title} onError={_ => setImageLoadingError(true)} />
		: createElement(imageIcon);

	const createLink = (tag, href, title) => (
		<li><a target='_blank' rel='noopener noreferrer' href={href}>{createElement(tag)} {title}</a></li>
	);

	return (
		<Fade bottom cascade>
			<div className='project'>
				<div className='projectImage'>
					<a target='_blank' rel='noopener noreferrer' href={url || src || '#'}>
						{!imageLoadingError ? image : <FaRegImage />}
					</a>
				</div>
				<h1>{title}</h1>
				<h2>{service[selectedLang]}</h2>
				<p>{desc[selectedLang]}</p>
				<ul className='techs'>{techs.map((tech, i) => (<li key={i}>{tech}</li>))}</ul>
				<ul className='links'>
					{url && (createLink(FaRegPaperPlane, url, liveDemo[selectedLang]))}
					{download_url && (createLink(FaDownload, download_url, download_link[selectedLang]))}
					{src && (createLink(FaGithub, src, 'Source'))}
				</ul>
			</div>
		</Fade>
	);
};