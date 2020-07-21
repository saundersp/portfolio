import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../scss/Work.scss';
import Project from './Project';
import language from '../data/info';
const { work } = language.menu;

export default class Work extends Component {
	render() {
		return (
			<Fade bottom cascade>
				<div className="work">
					<h1 className='heading'>{work[this.props.selectedLang]}</h1>
					<div className='work-content'>
						{language.projects.map((project, index) =>
							<Project key={index} project={project} selectedLang={this.props.selectedLang}></Project>
						)}
					</div>
				</div>
			</Fade>
		);
	}
};