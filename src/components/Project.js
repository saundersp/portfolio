import React, { createElement, useState } from 'react';
import { FaGithub, FaRegPaperPlane, FaRegImage, FaDownload } from 'react-icons/fa';
import { IconType } from 'react-icons';
import Fade from 'react-reveal/Fade';
import '../scss/Project.scss';
import { useLang } from '../services/LanguageService';
import { createElementLink } from './../toolbox';

const createLiElementLink = (tag: string | IconType, href: string, inner: string) => {
	return (<li>{createElementLink(tag, href, inner)}</li>);
};

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
	}
};
export default function Project({ project }: ProjetProps) {
	const [imageLoadingError, setImageLoadingError] = useState(false);

	const { url, imageSrc, title, service, desc, src, techs, download_url, imageIcon } = project;
	const image = imageSrc ?
		<img decoding='async' src={imageSrc} alt={title} onError={_ => setImageLoadingError(true)} />
		: createElement(imageIcon);

	const { t, getLangIndex } = useLang();
	const selectedLang = getLangIndex();

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
					{url && (createLiElementLink(FaRegPaperPlane, url, t('menu.liveDemo')))}
					{download_url && (createLiElementLink(FaDownload, download_url, t('menu.download_link')))}
					{src && (createLiElementLink(FaGithub, src, t('menu.source')))}
				</ul>
			</div>
		</Fade>
	);
}