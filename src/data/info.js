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
		home: ['Home', 'Accueil', 'Startseite'],
		about: ['About', 'À propos', 'Über'],
		work: ['Works', 'Travaux', 'Werke'],
		contact: ['Contact', 'Contact', 'Kontakt'],
		liveDemo: ['Live demo', 'Démo live', 'Live-Demo'],
		source: ['Source Code', 'Code Source', 'Quellcode'],
		download_link: ['Download', 'Télécharger', 'Herunterladen'],
		CV: ['Curriculum vitæ', 'Curriculum vitæ', 'Lebenslauf'],
		credits: [
			<>Made using React, {createLink('https://github.com/saundersp/portfolio', 'Source Code')}</>,
			<>Site crée avec React, {createLink('https://github.com/saundersp/portfolio', 'Code Source')}</>,
			<>Hergestellt mit React, {createLink('https://github.com/saundersp/portfolio', 'Quellcode')}</>
		]
	},
	headerTagline: [[
		"Hi 👋 You've found me!",
		'I am Saunders Pierre,',
		'Student in artificial intelligence'
	], [
		"Bonjour 👋 vous m'avez trouvé(e)!",
		'Je suis Saunders Pierre,',
		'Étudiant en intelligence artificielle'
	], [
		'Hallo 👋 Sie haben mich gefunden!',
		'Ich heiße Saunders Pierre',
		'Student im künstliche Intelligenz'
	]],
	aboutText: [
		<>Currently a second year Master MIAGE student in Sophia-Antipolis. I have always been fascinated about artificial intelligence and its possibilities.</>,
		<>Actuellement étudiant en deuxième année de Master MIAGE à Sophia-Antipolis. J'ai toujours été passionnée par l'intelligence artificielle et ses possibilités.</>,
		<>Derzeit Master MIAGE-Student im zweiten Jahr in Sophia-Antipolis. Ich war schon immer von künstlicher Intelligenz und ihren Möglichkeiten fasziniert.</>
	],
	certificateAccordion: [
		{ show: n => `Certificates (${n} more)`, hide: 'Hide' },
		{ show: n => `Certificats (${n} en plus)`, hide: 'Cacher' },
		{ show: n => `Zertifikate (${n} mehr)`, hide: 'Ausblenden' }
	],
	projects: [
		{
			title: 'WGAN-GP',
			service: ['Deep learning', 'Apprentissage profond', 'Tiefes Lernen'],
			desc: [
				'Implementation of the Wasserstein GAN with gradient penalty',
				'Implémentation du Wasserstein GAN avec pénalité de gradient',
				'Implementierung des Wasserstein-GANs mit Gradientenstrafe'
			],
			techs: ['Python', 'Tensorflow'],
			imageSrc: WGANGPImage,
			src: 'https://github.com/saundersp/wgan-gp'
		},
		{
			title: 'FlappAI',
			service: ['Genetic algorithm', 'Algorithme génétique', 'Genetischer Algorithmus'],
			desc: [
				'AI Playing Flappy Bird',
				'IA jouant à Flappy Bird',
				'KI Spielt Flappy Bird'
			],
			techs: ['HTML', 'CSS', 'Javascript'],
			imageSrc: FlappyIAImage,
			url: 'https://saundersp.github.io/FlappAI/',
			src: 'https://github.com/saundersp/FlappAI'
		},
		{
			title: 'JeuDeGoIA',
			service: ['MinMax', 'MinMax', 'MinMax'],
			desc: [
				'Implementation of an AI playing Go',
				"Implémentation d'une IA jouant au jeu de Go",
				'Implementierung einer Go spielenden KI'
			],
			techs: ['HTML', 'CSS', 'Javascript'],
			imageSrc: JeuDeGoIAImage,
			src: 'https://github.com/saundersp/JeuDeGoIA',
			url: 'https://saundersp.github.io/JeuDeGoIA/'
		},
		{
			title: 'SimpleGradientDescent',
			service: ['Deep learning', 'Apprentissage profond', 'Tiefes Lernen'],
			desc: [
				'Implementation of gradient descent with different optimization methods',
				"Implémentation d'une descente de gradient avec diverses technique d'optimisation",
				'Implementierung des Gradientenabstiegs mit verschiedenen Optimierungsverfahren'
			],
			techs: ['Python', 'Jupyter', 'Numpy', 'Matplotlib'],
			imageSrc: GradientDescentImage,
			src: 'https://github.com/saundersp/SimpleGradientDescent',
			url: 'https://github.com/saundersp/SimpleGradientDescent/blob/master/Linear%20Regression.ipynb'
		},
		{
			title: 'ToolboxModule',
			service: ['Javascript module', 'Module Javascript', 'Javascript-Modul'],
			desc: [
				'Module including several functions reusable for various projects',
				'Module incluant plusieurs fonctions réutilisables pour divers projets',
				'Modul mit mehreren Funktionen, die für verschiedene Projekte wiederverwendbar sind'
			],
			techs: ['Javascript', 'NodeJS'],
			imageIcon: FaToolbox,
			src: 'https://github.com/saundersp/ToolboxModule'
		},
		{
			title: 'ESP32Manager',
			service: ['IoT / Machine learning', 'IoT / Apprentissage automatique', 'IoT / Maschinelles Lernen'],
			desc: [
				'IoT Project to manage, handle, and predict anomalies on ESP32 boards',
				'Projet IoT pour configurer, gérer, et prédire des pannes de carte ESP32',
				'IoT-Projekt zur Verwaltung, Handhabung und Vorhersage von Anomalien auf ESP32-Boards'
			],
			techs: ['VueJS', 'Arduino', 'Python'],
			imageSrc: 'https://raw.githubusercontent.com/saundersp/ESP32Manager/master/front/src/assets/logo.png',
			src: 'https://github.com/saundersp/ESP32Manager'
		},
		{
			title: 'MarioSokoban',
			service: ['Video Game', 'Jeu vidéo', 'Videospiel'],
			desc: [
				"A Mario's themed sokoban game",
				'Un jeu de Sokoban sur le thème de Mario',
				'Ein Sokoban-Spiel mit Marios Thema'
			],
			techs: ['C++'],
			imageSrc: 'https://raw.githubusercontent.com/saundersp/MarioSokoban/master/bin/data/menus/instructions_jeu.png',
			src: 'https://github.com/saundersp/MarioSokoban',
			download_url: 'https://github.com/saundersp/MarioSokoban/releases/download/1.0/MarioSokoban.zip'
		},
		{
			title: 'EtudePopulationMondiale',
			service: ['Data mining', 'Exploration de données', 'Data-Mining'],
			desc: [
				'Study on the evolution of the global population',
				"Étude de l'évolution de la population mondiale",
				'Studie über die Entwicklung der Weltbevölkerung'
			],
			techs: ['R', 'Jupyter', 'tidyverse'],
			imageSrc: EtudePopulationMondiale,
			src: 'https://github.com/saundersp/EtudePopulationMondiale',
			url: "https://github.com/saundersp/EtudePopulationMondiale/blob/master/%C3%89tude%20de%20l'%C3%A9volution%20de%20la%20population%20mondiale.ipynb"
		}
		/*
		{
			title: '', // Title of the project
			service: ['UK', 'FR', 'DE'], // Category of work (JS/ML ...)
			desc: ['UK', 'FR', 'DE'], // Description
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