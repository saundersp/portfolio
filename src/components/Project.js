import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { FaGithub, FaRegPaperPlane, FaRegImage, FaDownload } from 'react-icons/fa';
import '../scss/Project.scss';
import language from '../data/info';
import { IconType } from 'react-icons';
const { liveDemo, download_link } = language.menu;

export default class Project extends Component {
	props: {
		project: {
			title: string,
			service: string[],
			desc: string[],
			techs: string[],
			imageIcon?: IconType,
			imageSrc?: string,
			url?: string,
			download_url?: string,
			src?: string,
		},
		selectedLang: string,
	};

	state = {
		imageLoadingError: false
	};

	imgNotFound = _ => this.setState({ imageLoadingError: true });

	render() {
		const { url, imageSrc, title, service, desc, src, techs, download_url } = this.props.project;
		const image = imageSrc ?
			<img decoding="async" src={imageSrc} alt={title} onError={this.imgNotFound} />
			: <this.props.project.imageIcon />;
		return (
			<Fade bottom cascade>
				<div className='project'>
					<div className="projectImage">
						<a target='_blank' rel="noopener noreferrer" href={url || src || '#'}>
							{!this.state.imageLoadingError ? image : <FaRegImage />}
						</a>
					</div>
					<h1>{title}</h1>
					<h2>{service[this.props.selectedLang]}</h2>
					<p>{desc[this.props.selectedLang]}</p>
					<ul className="techs">
						{techs.map((tech, i) => (<li key={i}>{tech}</li>))}
					</ul>
					<ul className="links">
						{url && (<li><a target='_blank' rel="noopener noreferrer" href={url}><FaRegPaperPlane /> {liveDemo[this.props.selectedLang]}</a></li>)}
						{download_url && (<li><a target='_blank' rel="noopener noreferrer" href={download_url}><FaDownload /> {download_link[this.props.selectedLang]}</a></li>)}
						{src && (<li><a target='_blank' rel="noopener noreferrer" href={src}><FaGithub /> Source</a></li>)}
					</ul>
				</div>
			</Fade>
		);
	}
};