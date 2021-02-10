import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../scss/Certificate.scss';
import { FaRegImage, FaRegFileImage, FaRegFilePdf } from 'react-icons/fa';

export default class Certificate extends Component {
	props: {
		certificate: {
			title: string,
			author: string,
		}
	};

	_isMounted = false;

	state = {
		imageLoadingError: false,
		image: '', pdf: ''
	};

	constructor(props) {
		super(props);
		this.loadRessources(props.certificate.title);
	}

	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	loadRessources = async title => {
		const [image, pdf] = await Promise.all(['jpg', 'pdf'].map(ext => new Promise(async resolve =>
			resolve((await import(/* webpackMode: "eager" */ `./../data/certificates/${title}.${ext}`)).default)
		)));
		if (this._isMounted)
			this.setState({ image, pdf });
	};

	imgNotFound = _ => this.setState({ imageLoadingError: true });

	render() {
		const { title, author } = this.props.certificate;
		return (
			<Fade bottom cascade>
				<div className='certificate'>
					<a className="certificateImage" target='_blank' rel="noopener noreferrer" href={this.state.image}>
						{!this.state.imageLoadingError ?
							<img decoding="async" src={this.state.image} alt={title} onError={this.imgNotFound} />
							: <FaRegImage />}
					</a>
					<h1>{title}</h1>
					<q>{author}</q>
					<ul>
						<li><a target='_blank' rel="noopener noreferrer" href={this.state.image}><FaRegFileImage /><span> JPG</span></a></li>
						<li><a target='_blank' rel="noopener noreferrer" href={this.state.pdf}><FaRegFilePdf /><span> PDF</span></a></li>
					</ul>
				</div>
			</Fade>
		);
	}
};