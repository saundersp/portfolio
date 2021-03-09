import React from 'react';
import { FaToolbox } from 'react-icons/fa';
import FlappyIAImage from './images/FlappyIA.png';
import JeuDeGoIAImage from './images/JeuDeGoIA.png';
import GradientDescentImage from './images/GradientDescent.png';
import WGANGPImage from './images/WGANGP.png';
import EtudePopulationMondiale from './images/EtudePopulationMondiale.png';
import { createLink } from './../toolbox';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	menu: {
		home: ['Accueil', 'Home'],
		about: ['À propos', 'About'],
		work: ['Travaux', 'Work'],
		contact: ['Contact', 'Contact'],
		liveDemo: ['Démo live', 'Live demo'],
		download_link: ['Télécharger', 'Download'],
		CV: ['Curriculum vitæ', 'Curriculum vitæ'],
		credits: [
			<>Site crée avec React, {createLink('https://github.com/saundersp/portfolio', 'Code Source')}</>,
			<>Made using React, {createLink('https://github.com/saundersp/portfolio', 'Source Code')}</>
		]
	},
	headerTagline: [
		[
			"Bonjour 👋 vous m'avez trouvé(e)!",
			'Je suis Pierre Saunders,',
			'Étudiant en machine learning'
		], [
			'Hi 👋 You found me!',
			'I am Saunders Pierre,',
			'Student in machine learning'
		]
	],
	CV: [CVFR, CVUK],
	aboutText: [
		<>Actuellement étudiant en 2ème année de Master MIAGE à Sophia-Antipolis. J'ai toujours été passionnée par l'informatique et ses possibilités.</>,
		<>Currently a 2nd year Master MIAGE student in Sophia-Antipolis. I have always been fascinated about IT and its possibilities.</>
	],
	certificateAccordion: [
		{ show: n => `Certificats (${n} en plus)`, hide: 'Cacher' },
		{ show: n => `Certificates (${n} more)`, hide: 'Hide' }
	],
	projects: [
		{
			title: 'WGAN-GP',
			service: ['Apprentissage profond', 'Deep learning'],
			desc: [
				'Implémentation du Wasserstein GAN avec pénalité de gradient',
				'Implementation of the Wasserstein GAN with gradient penalty'
			],
			techs: ['Python', 'Tensorflow'],
			imageSrc: WGANGPImage,
			src: 'https://github.com/saundersp/wgan-gp'
		},
		{
			title: 'FlappAI',
			service: ['Algorithme génétique', 'Genetic algorithm'],
			desc: [
				'IA jouant à Flappy bird',
				'AI Playing Flappy bird'
			],
			techs: ['HTML', 'CSS', 'Javascript'],
			imageSrc: FlappyIAImage,
			url: 'https://saundersp.github.io/FlappAI/',
			src: 'https://github.com/saundersp/FlappAI'
		},
		{
			title: 'JeuDeGoIA',
			service: ['MinMax', 'MinMax'],
			desc: [
				"Implémentation d'une IA jouant au jeu de Go",
				'Implementation of an AI playing Go'
			],
			techs: ['HTML', 'CSS', 'Javascript'],
			imageSrc: JeuDeGoIAImage,
			src: 'https://github.com/saundersp/JeuDeGoIA',
			url: 'https://saundersp.github.io/JeuDeGoIA/'
		},
		{
			title: 'SimpleGradientDescent',
			service: ['Apprentissage profond', 'Deep learning'],
			desc: [
				"Implémentation d'une descente de gradient avec diverses technique d'optimisation",
				'Implementation of gradient descent with different optimisation techniques'
			],
			techs: ['Python', 'Jupyter', 'Numpy', 'Matplotlib'],
			imageSrc: GradientDescentImage,
			src: 'https://github.com/saundersp/SimpleGradientDescent',
			url: 'https://github.com/saundersp/SimpleGradientDescent/blob/master/Linear%20Regression.ipynb'
		},
		{
			title: 'ToolboxModule',
			service: ['Module Javascript', 'Javascript module'],
			desc: [
				'Module incluant plusieurs fonctions réutilisables pour divers projets',
				'Module including several functions reusable for various projects'
			],
			techs: ['Javascript', 'NodeJS'],
			imageIcon: FaToolbox,
			src: 'https://github.com/saundersp/ToolboxModule'
		},
		{
			title: 'ESP32Manager',
			service: ['Iot / Apprentissage automatique', 'IoT / Machine learning'],
			desc: [
				'Projet IOT pour configurer, gérer, et prédire des pannes de carte ESP32',
				'IOT Project to manage, handle, and predicts anomalies on ESP32 boards'
			],
			techs: ['VueJS', 'Arduino', 'Python'],
			imageSrc: 'https://raw.githubusercontent.com/saundersp/ESP32Manager/master/front/src/assets/logo.png',
			src: 'https://github.com/saundersp/ESP32Manager'
		},
		{
			title: 'MarioSokoban',
			service: ['Jeu vidéo', 'Video Game'],
			desc: ['Un jeu de Sokoban sur le thème de Mario', "A Mario's themed sokoban game"],
			techs: ['C++'],
			imageSrc: 'https://raw.githubusercontent.com/saundersp/MarioSokoban/master/bin/data/menus/instructions_jeu.png',
			src: 'https://github.com/saundersp/MarioSokoban',
			download_url: 'https://github.com/saundersp/MarioSokoban/releases/download/1.0/MarioSokoban.zip'
		},
		{
			title: 'EtudePopulationMondiale',
			service: ['Exploration de données', 'Data mining'],
			desc: ["Étude de l'évolution de la population mondiale", 'Study on the evolution of the global population'],
			techs: ['R', 'Jupyter', 'tidyverse'],
			imageSrc: EtudePopulationMondiale,
			src: 'https://github.com/saundersp/EtudePopulationMondiale',
			url: "https://github.com/saundersp/EtudePopulationMondiale/blob/master/%C3%89tude%20de%20l'%C3%A9volution%20de%20la%20population%20mondiale.ipynb"
		}
		/*
		{
			title: '', // Title of the project
			service: ['FR', 'UK'], // Category of work (JS/ML ...)
			desc: ['FR', 'UK'], // Description
			techs: [], // List of technologies used (Javascript / Python ...)
			imageSrc: '', // Link to a representative image [optional]
			imageIcon: , // Reflect F.A Icon object [optional]
			src: '', // Github link / Source code [optional]
			url: '', // Live demo [optional]
			download_url: '' // Download link [optional]
		}
		*/
	]
}