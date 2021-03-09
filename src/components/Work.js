import React from 'react';
import { Fade } from 'react-awesome-reveal';
import '../scss/Work.scss';
import Project from './Project';
import language from '../data/info';
import { useLang } from '../services/LanguageService';

export default function Work() {
	const { t } = useLang();

	return (
		<Fade direction="left" duration={500} cascade triggerOnce>
			<div className='work'>
				<h1 className='heading'>{t('menu.work')}</h1>
				<div className='work-content'>
					{language.projects.map((project, index) =>
						<Project key={index} project={project}></Project>
					)}
				</div>
			</div>
		</Fade>
	);
}