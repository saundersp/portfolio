import { FaToolbox, FaTasks, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import FlappyIAImage from './images/FlappyIA.png';
import JeuDeGoIAImage from './images/JeuDeGoIA.png';
import GradientDescentImage from './images/GradientDescent.png';
import WGANGPImage from './images/WGANGP.png';
import VAEImage from './images/VAE.png';
import EtudePopulationMondiale from './images/EtudePopulationMondiale.png';
import QCMJump from './images/QCMJump.png';
import SevenWonders from './images/7Wonders.jpg';
import HBase from './images/HBase.png';
import { createLink } from '../toolbox';

/* eslint import/no-anonymous-default-export: [2, {'allowObject': true}] */
export default {
	name: 'Saunders Pierre',
	languages: [{ name: 'English', code: 'GB' }, { name: 'Français', code: 'FR' }, { name: 'Deutsch', code: 'DE' }/*, { name: 'Россия', code: 'RU' }, { name: 'Español', code: 'ES' }, { name: 'Italiano', code: 'IT' }*/],
	aboutImage: 'https://media-exp1.licdn.com/dms/image/C4D03AQEXoQPNTzC4qA/profile-displayphoto-shrink_800_800/0/1594979363759?e=1638403200&v=beta&t=RyGh1vEvYB_VvlLgCNEiV1CBafU1r14CBKHLx4CuUS8',
	social: [
		{ name: 'GitHub', icon: FaGithub, url: 'https://github.com/saundersp' },
		{ name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/pierre-saunders' },
		{ name: 'Mail', icon: FaMailBulk, url: 'mailto:pierre.saundersgb@gmail.com' }
	],
	certificates: [
		{ title: 'Artificial Intelligence A-Z Learn How To Build An AI', author: 'SuperDataScience Team' },
		{ title: 'Machine Learning A-Z Hands-On Python & R In Data Science', author: 'SuperDataScience Team' },
		{ title: 'Deep Learning A-Z Hands-On Artificial Neural Networks', author: 'SuperDataScience Team' },
		{ title: 'Discrete Mathematics', author: 'Miran Fattah' },
		{ title: 'VueJS', author: 'Enzo Ustariz' },
		{ title: 'Javascript ES6', author: 'K.Sathyaprakash Reddy' },
		{ title: 'Music Theory Levels 1, 2 & 3', author: 'Jason Allen' }
	],
	menu: {
		home: ['Home', 'Accueil', 'Startseite'],
		about: ['About', 'À propos', 'Über'],
		skills: ['Skills', 'Compétences', 'Fertigkeiten'],
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
	headerTagLine: [[
		"Hi 👋 You've found me!",
		'I am Saunders Pierre,',
		'an artificial intelligence enthusiast 🤖'
	], [
		"Bonjour 👋 vous m'avez trouvé(e)!",
		'Je suis Saunders Pierre,',
		"un passionné d'intelligence artificielle 🤖"
	], [
		'Hallo 👋 Sie haben mich gefunden!',
		'Ich heiße Saunders Pierre',
		'ein Enthusiast der künstlichen Intelligenz 🤖'
	]],
	aboutText: [
		<>Born in Frimley Park (GB), I always was curious and eager for knowledge in diverse fields. I am currently looking for funding for a PhD position in generative models. Music, swimming and cinema are hobbies that I love as much as programming.</>,
		<>Né à Frimley Park (GB), j'ai toujours été curieux et avide de connaissances dans divers domaines. Je suis actuellement à la recherche de financement pour un poste de doctorant en modèles génératifs. La musique, la natation et le cinéma sont des loisirs que j'aime autant que la programmation.</>,
		<>Geboren in Frimley Park (GB), war ich schon immer neugierig und wissbegierig in verschiedenen Bereichen. Derzeit bin ich auf der Suche nach einer Finanzierung für eine Doktorandenstelle im Bereich generativer Modelle. Musik, Schwimmen und Kino sind Hobbys, die ich ebenso sehr liebe wie das Programmieren.</>
	],
	certificateAccordion: [
		{ show: n => `Certificates (${n} more)`, hide: 'Hide' },
		{ show: n => `Certificats (${n} en plus)`, hide: 'Cacher' },
		{ show: n => `Zertifikate (${n} mehr)`, hide: 'Ausblenden' }
	],
	skill_names: [
		['General knowledge', 'Frameworks', 'Languages', 'Others'],
		['Connaissances générales', 'Frameworks', 'Langages', 'Autres'],
		['Allgemeines Wissen', 'Rahmenwerke', 'Sprachen', 'Andere']
	],
	skills_table_titles: [
		['Skill name', 'LinkedIn Validation', 'Estimated Level'],
		['Nom Compétence', 'Validation LinkedIn', 'Niveau estimé'],
		['Skill-Name', 'LinkedIn Validierung', 'Geschätztes Stufe']
	],
	skills: [
		[
			{ name: ['Object-Oriented Programming (OOP)', 'Programmation Orientée Objet (POO)', 'Objektorientierte Programmierung'], has_linked_badge: true, level: 90 },
			{ name: ['Machine Learning', 'Apprentissage automatique', 'Maschinelles Lernen'], has_linked_badge: true, level: 85 },
			{ name: ['Deep Learning', 'Apprentissage profond', 'Tiefes Lernen'], level: 90 },
			{ name: ['Agile Method', 'Méthode Agile', 'Agile Methode'], level: 40 },
		],
		[
			{ name: 'Android', has_linked_badge: true, level: 70 },
			{ name: 'Angular', has_linked_badge: true, level: 60 },
			{ name: 'React.js', has_linked_badge: true, level: 85 },
			{ name: 'VueJS', level: 70 },
			{ name: 'Arduino', level: 80 },
			{ name: 'PyTorch', level: 70 },
			{ name: 'Tensorflow', level: 45 },
			{ name: 'Keras', level: 60 },
		],
		[
			{ name: 'Bash', has_linked_badge: true, level: 80 },
			{ name: 'C', has_linked_badge: true, level: 85 },
			{ name: 'C++', has_linked_badge: true, level: 50 },
			{ name: 'HTML', has_linked_badge: true, level: 90 },
			{ name: 'Java', has_linked_badge: true, level: 90 },
			{ name: 'JavaScript', has_linked_badge: true, level: 95 },
			{ name: 'TypeScript', level: 85 },
			{ name: 'Node.js', has_linked_badge: true, level: 60 },
			{ name: 'NoSQL', has_linked_badge: true, level: 75 },
			{ name: 'Python', has_linked_badge: true, level: 90 },
			{ name: 'R', has_linked_badge: true, level: 60 },
			{ name: 'MySQL', has_linked_badge: true, level: 80 },
			{ name: 'PHP', has_linked_badge: true, level: 65 },
			{ name: 'CSS', has_linked_badge: true, level: 50 },
			{ name: 'Sass', level: 50 },
		],
		[
			{ name: 'Git', has_linked_badge: true, level: 80 },
			{ name: 'Linux', has_linked_badge: true, level: 60 },
			{ name: 'JSON', has_linked_badge: true, level: 95 },
			{ name: 'Maven', has_linked_badge: true, level: 80 },
			{ name: 'Docker', level: 90 },
			{ name: 'LaTeX', level: 10 },
			{ name: 'MongoDB', has_linked_badge: true, level: 70 },
		],
	],
	projects_title: [
		['Research projects 🔬', 'School projects 🏫', 'Personal projects 🚀'],
		['Projets de recherche 🔬', 'Projets scolaires 🏫', 'Projets personnels 🚀'],
		['Forschungsprojekte 🔬', 'Schulprojekte 🏫', 'Persönliche Projekte 🚀']
	],
	projects: [
		[
			{
				title: "Wimmics's SemanticWebBenchmarker",
				service: ['Semantic Web', 'Web sémantique', 'Semantisches Web'],
				desc: [
					'Platform to easily evaluate different RDF engines on different comparators',
					'Plateforme pour évaluer facilement différents moteurs RDF sur différents comparateurs',
					'Plattform zur einfachen Bewertung verschiedener RDF-Engines auf verschiedenen Vergleichsgeräten'
				],
				techs: ['Docker', 'Bash', 'RDF', 'SPARQL'],
				imageIcon: FaTasks,
				src: 'https://github.com/SemanticWebBenchmarker'
			}
		],
		[
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
			}, {
				title: 'ESP32Manager',
				service: ['IoT / Machine learning', 'IoT / Apprentissage automatique', 'IoT / Maschinelles Lernen'],
				desc: [
					'IoT Project to manage, handle, and predict anomalies on ESP32 boards',
					'Projet IoT pour configurer, gérer, et prédire des pannes de carte ESP32',
					'IoT-Projekt zur Verwaltung, Handhabung und Vorhersage von Anomalien auf ESP32-Boards'
				],
				techs: ['VueJS', 'Arduino', 'Python', 'NodeJS', 'Scikit-Learn'],
				imageSrc: 'https://raw.githubusercontent.com/saundersp/ESP32Manager/master/front/src/assets/logo.png',
				src: 'https://github.com/saundersp/ESP32Manager'
			}, {
				title: 'EtudePopulationMondiale',
				service: ['Data mining', 'Exploration de données', 'Data-Mining'],
				desc: [
					'Study on the evolution of the global population',
					"Étude de l'évolution de la population mondiale",
					'Studie über die Entwicklung der Weltbevölkerung'
				],
				techs: ['R', 'Jupyter', 'Bash', 'tidyverse'],
				imageSrc: EtudePopulationMondiale,
				src: 'https://github.com/saundersp/EtudePopulationMondiale',
				url: 'https://nbviewer.jupyter.org/github/saundersp/EtudePopulationMondiale/blob/master/Study%20on%20the%20evolution%20of%20the%20global%20population.ipynb'
			}, {
				title: 'HBaseMonitoring',
				service: ['Database', 'Base de données', 'Datenbank'],
				desc: [
					'HBase Database Manager Technology Monitoring',
					'Veille technologique du gestionnaire de base de données HBase',
					'HBase Database Manager Technology Watch'
				],
				techs: ['Java', 'Maven'],
				imageSrc: HBase,
				src: 'https://github.com/ThomasGauci/HBaseProjet'
			}, {
				title: '7Wonders',
				service: ['Video Game', 'Jeu vidéo', 'Videospiel'],
				desc: [
					'Command line implementation of the 7Wonders board game',
					'Implémentation en ligne de commande du jeu de plateau 7Wonders',
					'Kommandozeilenimplementierung des 7Wonders Brettspiels'
				],
				techs: ['Java', 'Maven'],
				imageSrc: SevenWonders,
				src: 'https://github.com/RemiFELIN/7Wonders_By_Miagestics',
				download_url: 'https://github.com/RemiFELIN/7Wonders_By_Miagestics/archive/refs/tags/LivraisonFinale.zip'
			}, {
				title: 'QCMJump',
				service: ['Video Game', 'Jeu vidéo', 'Videospiel'],
				desc: [
					'Multiple choice quiz game with a platform game component',
					'Jeu de questionnaire à choix multiples avec une composante de jeu de plateforme',
					'Multiple-Choice-Quizspiel mit einer Plattformspielkomponente'
				],
				techs: ['HTML', 'Javascript'],
				imageSrc: QCMJump,
				src: 'https://github.com/FulconisYan/QCMJump',
				url: 'https://fulconisyan.github.io/QCMJump'
			}
		],
		[
			{
				title: 'VAE',
				service: ['Deep learning', 'Apprentissage profond', 'Tiefes Lernen'],
				desc: [
					'Implementation of the Variational Auto Encoder',
					"Implémentation de l'encodeur automatique variationnel",
					'Implementierung des Variational Auto Encoders'
				],
				techs: ['Python', 'PyTorch', 'Bash', 'Docker'],
				imageSrc: VAEImage,
				src: 'https://github.com/saundersp/VariationalAutoEncoder',
				url: 'https://nbviewer.jupyter.org/github/saundersp/VariationalAutoEncoder/blob/main/Variational%20Auto%20Encoder.ipynb'
			}, {
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
			}, {
				title: 'FlappAI',
				service: ['Genetic algorithm', 'Algorithme génétique', 'Genetischer Algorithmus'],
				desc: [
					'AI Playing Flappy Bird',
					'IA jouant à Flappy Bird',
					'KI Spielt Flappy Bird'
				],
				techs: ['HTML', 'Sass', 'Javascript'],
				imageSrc: FlappyIAImage,
				url: 'https://saundersp.github.io/FlappAI/',
				src: 'https://github.com/saundersp/FlappAI'
			}, {
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
				url: 'https://nbviewer.jupyter.org/github/saundersp/SimpleGradientDescent/blob/master/Linear%20Regression.ipynb'
			}, {
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
			}, {
				title: 'MarioSokoban',
				service: ['Video Game', 'Jeu vidéo', 'Videospiel'],
				desc: [
					"A Mario's themed sokoban game",
					'Un jeu de Sokoban sur le thème de Mario',
					'Ein Sokoban-Spiel mit Marios Thema'
				],
				techs: ['C++', 'SDL', 'Adobe Illustrator'],
				imageSrc: 'https://raw.githubusercontent.com/saundersp/MarioSokoban/master/bin/data/menus/instructions_jeu.png',
				src: 'https://github.com/saundersp/MarioSokoban',
				download_url: 'https://github.com/saundersp/MarioSokoban/releases/download/1.0/MarioSokoban.zip'
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
	]
};
