import React from 'react';
import Fade from 'react-reveal/Fade';
import '../scss/Work.scss';
import Project from './Project';
import language from '../data/info';
import { useLang } from '../services/LanguageService';

export default function Work() {
	const { t } = useLang();

	return (
		<Fade bottom cascade>
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