import React from 'react';
import { Fade } from 'react-awesome-reveal';
import '../scss/Work.scss';
import Project from './Project';
import info from '../data/info';
import { useLang } from '../services/LanguageService';

export default function Work() {

	const { t, getLangIndex } = useLang();

	return (
		<Fade direction="left" duration={500} cascade triggerOnce>
			<div className='work'>
				<h1 className='heading'>{t('menu.work')}</h1>
				{info.projects_title[getLangIndex()].reduce((tab, key, i) => {
					tab.push(<h2 key={'h' + key}>{key} {info.projects_icons[i]}</h2>);
					tab.push(<div key={'w' + key} className='work-content'>
						{info.projects[i].map((project, index) =>
							<Project key={index} project={project}></Project>
						)}
					</div>);
					return tab;
				}, [])}
			</div>
		</Fade>
	);
}
