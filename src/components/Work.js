import React from 'react';
import Fade from 'react-reveal/Fade';
import '../scss/Work.scss';
import Project from './Project';
import language from '../data/info';
const { work } = language.menu;

type WorkProps = {
	selectedLang: number
};
export default function Work({ selectedLang }: WorkProps) {
	return (
		<Fade bottom cascade>
			<div className='work'>
				<h1 className='heading'>{work[selectedLang]}</h1>
				<div className='work-content'>
					{language.projects.map((project, index) =>
						<Project key={index} project={project} selectedLang={selectedLang}></Project>
					)}
				</div>
			</div>
		</Fade>
	);
};