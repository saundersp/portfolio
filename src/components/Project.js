import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { FaGithub, FaRegPaperPlane, FaRegImage } from 'react-icons/fa';
import '../scss/Project.scss';
import language from '../data/info';
const { liveDemo } = language.menu;

export default class Project extends Component {
	state = {
		imageLoadingError: false
	};

	imgNotFound = _ => this.setState({ imageLoadingError: true });

	render() {
		const { url, imageSrc, title, service, desc, src, techs } = this.props.project;
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
					<h2>{service}</h2>
					<p>{desc[this.props.selectedLang]}</p>
					<ul className="techs">
						{techs.map((tech, i) => (<li key={i}>{tech}</li>))}
					</ul>
					<ul className="links">
						{url && (<li><a target='_blank' rel="noopener noreferrer" href={url}><FaRegPaperPlane /> {liveDemo[this.props.selectedLang]}</a></li>)}
						{src && (<li><a target='_blank' rel="noopener noreferrer" href={src}><FaGithub /> Source</a></li>)}
					</ul>
				</div>
			</Fade>
		);
	}
};