import { createElement, useState } from 'react';
import { FaGithub, FaRegPaperPlane, FaRegImage, FaDownload } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import '../scss/Project.scss';
import { useLang } from '../services/LanguageService';
import { createElementLink } from '../toolbox';

const createLiElementLink = (tag, href, inner) => {
	return (<li>{createElementLink(tag, href, inner)}</li>);
};

export default function Project({ project }) {
	const [imageLoadingError, setImageLoadingError] = useState(false);

	const { url, imageSrc, title, service, desc, src, techs, download_url, imageIcon } = project;
	const image = imageSrc ?
		<img decoding='async' src={imageSrc} alt={title} onError={_ => setImageLoadingError(true)} />
		: createElement(imageIcon);

	const { t, getLangIndex } = useLang();
	const selectedLang = getLangIndex();

	return (
		<Fade direction="left" duration={500} cascade triggerOnce>
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
