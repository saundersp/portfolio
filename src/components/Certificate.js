import React, { createElement, useState, useEffect } from 'react';
import { FaRegImage, FaRegFileImage, FaRegFilePdf } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import '../scss/Certificate.scss';
import { loadResource, createElementLink } from './../toolbox';

const loadCertificate = (title: string, ext: string) => loadResource(`certificates/${title}.${ext}`);

type CertificateProps = {
	certificate: {
		title: string,
		author: string
	}
};
export default function Certificate({ certificate }: CertificateProps) {
	const { title, author } = certificate;
	const [imageLoadingError, setImageLoadingError] = useState(false);
	const [image, setImage] = useState('');
	const [pdf, setPdf] = useState('');

	useEffect(() => {
		let isMounted = true;
		(async () => {
			const [image, pdf] = await Promise.all(['jpg', 'pdf'].map(ext => loadCertificate(title, ext)));
			if (isMounted) {
				setImage(image);
				setPdf(pdf);
			}
		})();
		return () => isMounted = false;
	}, [title]);

	const createLink = (tag, href, title) => (
		<a target='_blank' rel='noopener noreferrer' href={href}>{createElement(tag)}<span> {title}</span></a>
	);

	return (
		<Fade bottom cascade>
			<div className='certificate'>
				<a className='certificateImage' target='_blank' rel='noopener noreferrer' href={image}>
					{!imageLoadingError ?
						<img decoding='async' src={image} alt={title} onError={_ => setImageLoadingError(true)} />
						: <FaRegImage />}
				</a>
				<h1>{title}</h1><q>{author}</q>
				<ul>
					<li>{createElementLink(FaRegFileImage, image, 'JPG')}</li>
					<li>{createElementLink(FaRegFilePdf, pdf, 'PDF')}</li>
				</ul>
			</div>
		</Fade>
	);
}