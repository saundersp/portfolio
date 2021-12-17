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
import ProfilePicture from './images/profile_picture.jpg';
import { createLink } from '../toolbox';

/* eslint import/no-anonymous-default-export: [2, {'allowObject': true}] */
export default {
	name: 'Saunders Pierre',
	languages: [{ name: 'English', code: 'GB' }, { name: 'Français', code: 'FR' }, { name: 'Deutsch', code: 'DE' }, { name: 'Español', code: 'ES' }, { name: 'Italiano', code: 'IT' }, { name: 'Россия', code: 'RU' }],
	aboutImage: ProfilePicture,
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
		home: ['Home', 'Accueil', 'Startseite', 'Inicio', 'Casa', 'Главная'],
		about: ['About', 'À propos', 'Über', 'Sobre', 'Circa', 'О нас'],
		skills: ['Skills', 'Compétences', 'Fertigkeiten', 'Habilidades', 'Competenze', 'Навыки'],
		work: ['Works', 'Travaux', 'Werke', 'Obras', 'Opere', 'Работы'],
		contact: ['Contact', 'Contact', 'Kontakt', 'Contacte con', 'Contatta', 'Связаться с'],
		liveDemo: ['Live demo', 'Démo live', 'Live-Demo', 'Demostración en vivo', 'Dimostrazione dal vivo', 'Живая демонстрация'],
		source: ['Source Code', 'Code Source', 'Quellcode', 'Código fuente', 'Codice sorgente', 'Исходный код'],
		download_link: ['Download', 'Télécharger', 'Herunterladen', 'Descargar', 'Scaricare', 'Скачать'],
		CV: ['Curriculum vitæ', 'Curriculum vitæ', 'Lebenslauf', 'Curriculum vitæ', 'Curriculum vitæ', 'Биографическая справка'],
		credits: [
			<>Made using React, {createLink('https://github.com/saundersp/portfolio', 'Source Code')}</>,
			<>Site crée avec React, {createLink('https://github.com/saundersp/portfolio', 'Code Source')}</>,
			<>Hergestellt mit React, {createLink('https://github.com/saundersp/portfolio', 'Quellcode')}</>,
			<>Sitio web creado con React, {createLink('https://github.com/saundersp/portfolio', 'Código fuente')}</>,
			<>Sito web creato con React, {createLink('https://github.com/saundersp/portfolio', 'Codice sorgente')}</>,
			<>Веб-сайт, созданный с помощью React, {createLink('https://github.com/saundersp/portfolio', 'Исходный код')}</>
		]
	},
	headerTagLine: [
		"Hi 👋 You've found me!\nI am Saunders Pierre,\nan artificial intelligence enthusiast 🤖",
		"Bonjour 👋 vous m'avez trouvé(e)!\nJe suis Saunders Pierre,\nun passionné d'intelligence artificielle 🤖",
		"Hallo 👋 Sie haben mich gefunden!\nIch heiße Saunders Pierre\nein Enthusiast der künstlichen Intelligenz 🤖",
		"Hola 👋 ¡Me has encontrado!\nSoy Pierre Saunders\nun entusiasta de la inteligencia artificial 🤖",
		"Ciao 👋 mi hai trovato!\nSono Pierre Saunders\nun appassionato di intelligenza artificiale 🤖",
		"Привет 👋 ты нашел меня!\nЯ Пьер Сондерс.\nэнтузиаст искусственного интеллекта 🤖"
	],
	aboutText: [
		<>Born in Frimley Park (GB), I always was curious and eager for knowledge in diverse fields. I am currently looking for funding for a PhD position in generative models. Music, swimming and cinema are hobbies that I love as much as programming.</>,
		<>Né à Frimley Park (GB), j'ai toujours été curieux et avide de connaissances dans divers domaines. Je suis actuellement à la recherche de financement pour un poste de doctorant en modèles génératifs. La musique, la natation et le cinéma sont des loisirs que j'aime autant que la programmation.</>,
		<>Geboren in Frimley Park (GB), war ich schon immer neugierig und wissbegierig in verschiedenen Bereichen. Derzeit bin ich auf der Suche nach einer Finanzierung für eine Doktorandenstelle im Bereich generativer Modelle. Musik, Schwimmen und Kino sind Hobbys, die ich ebenso sehr liebe wie das Programmieren.</>,
		<>Nacido en Frimley Park (Reino Unido), siempre he tenido curiosidad y ganas de aprender en diversos campos. Actualmente estoy buscando financiación para un puesto de doctorado en modelos generativos. La música, la natación y el cine son aficiones que me gustan tanto como la programación.</>,
		<>Nato a Frimley Park (Regno Unito), sono sempre stato curioso e desideroso di imparare in vari campi. Attualmente sto cercando finanziamenti per una posizione di dottorato in modelli generativi. La musica, il nuoto e il cinema sono hobby che mi piacciono tanto quanto la programmazione.</>,
		<>Я родился в Фримли Парк (Великобритания), всегда был любознательным и стремился к знаниям в различных областях. В настоящее время я ищу финансирование на должность доктора философии в области генеративных моделей. Музыка, плавание и кино - хобби, которые мне нравятся не меньше, чем программирование.</>
	],
	badges: [
		{ name: 'Gentoo-Logo', url: 'https://img.shields.io/badge/OS-Gentoo-9cf?style=for-the-badge&labelColor=E9E9E9&color=625BC7&logoColor=54487A&logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHRpdGxlPkdlbnRvbzwvdGl0bGU+CgogPGcgY2xhc3M9ImxheWVyIj4KICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+CiAgPHBhdGggZD0ibTkuOTQsMGE3LjMxLDcuMzEgMCAwIDAgLTEuMjYsMC4xMTZjLTQuMzQ0LDAuNzk1IC03LjQsNC41NTUgLTcuNjYxLDcuMDMxYy0wLjEyNiwxLjIxNSAwLjUzLDIuMTI1IDAuODksMi41MjZjMC45NzcsMS4wODUgMi45MjQsMS45MTQgNC4xNzUsMi42MDFjLTEuODEsMS41NDMgLTIuNjQsMi4yOTYgLTMuNDU3LDMuMTU0Yy0xLjIyNCwxLjI4NCAtMi4wODQsMi42OTcgLTIuMDg3LDMuNzFjMCwwLjMyNSAtMC4wNTMsMS4zNjUgMC4zNzEsMi4xODdjMC4xNiwwLjMwOSAwLjYxMywxLjMzOCAxLjk4LDIuMTA5YzAuODc0LDAuNDk0IDIuMTE5LDAuNjc1IDMuMzM3LDAuNTAxYzMuNzcyLC0wLjUzOCA4LjgyMywtMy43MzcgMTIuNDI3LC02LjcxNmMyLjI5NywtMS45IDMuOTc3LC0zLjczOSA0LjQ2MiwtNC42NDRjMC4zOSwtMC43MzEgMC40MzQsLTIuMDQzIDAuMjA3LC0yLjg2NmMtMC42NDUsLTIuMzM3IC01Ljg4NywtNy4xMjUgLTEwLjE3MiwtOS4wNTFhNy44MjQsNy44MjQgMCAwIDAgLTMuMjEyLC0wLjY1OHptLTAuMDA4LDAuMDY4YTcuNCw3LjQgMCAwIDEgMy4zNDQsMC43NTVjMy40NiwxLjcgOS4zMDgsNi40ODIgOS43MzksOC44ODZjMC41MzQsMi45NzIgLTkuOTMxLDExLjAxNyAtMTYuMjk3LDEyLjI3MmMtMi40NywwLjQ4NSAtNC41NzYsMC42MTggLTUuNTM3LC0xLjk5Yy0wLjgzMiwtMi4yNjIgMC43ODMsLTMuOTE2IDMuMTYsLTYuMDlhOTIuNTQ2LDkyLjU0NiAwIDAgMSAyLjk2LC0yLjU3NmMwLjA2NSwtMC4wNjkgLTUuNzA2LC0yLjA1OSAtNS44OSwtNC4zNDNjLTAuMTksLTIuMzQ4IDMuNTI3LC02LjY4MiA4LjI4NiwtNi45MDZjMC4wOCwtMC4wMDQgMC4xNTcsLTAuMDA3IDAuMjM1LC0wLjAwOHptLTAuMTEyLDAuNTJhNS42NDcsNS42NDcgMCAwIDAgLTAuNTA2LDAuMDMyYy0yLjMzNywwLjI0NSAtMi43ODUsMC41NDcgLTQuOTAzLDIuMTQ5Yy0wLjcxLDAuNTM3IC0yLjAxNiwxLjg0NCAtMi4zNSwzLjM5M2MtMC4xMjgsMC41OSAwLjAyNCwxLjEgMC40NDgsMS40NThjMS4zNiwxLjE0NCAzLjYzOSwyLjA3MiA1LjUwOSwyLjk3YzAuNTQ3LDAuMjYzIDAuMTg1LDAuNzQgLTAuNjk4LDEuNTA1Yy0yLjIyNywxLjkyOCAtNS4yNCw0LjI3NiAtNS40NSw2LjA2NmMtMC4wOTksMC44NDIgMC4xOSwxLjk4OCAxLjIxMywyLjU3NGMxLjE5NSwwLjY4NSAzLjY3NiwwLjIzOCA1LjMzMywtMC4zNzljMi40MjIsLTAuOTAyIDUuNjAyLC0yLjg5MiA4LjEyNywtNC44NDhjMi42MjUsLTIuMDM0IDUuMDY3LC00LjYxNyA1LjE4OCwtNS4wMzhjMC4xNDgsLTAuNTE3IDAuMTMzLC0wLjk5NiAtMC4xNTQsLTEuNTQ2Yy0wLjQ0OCwtMC44NjIgLTEuMDQ5LC0xLjUwMyAtMS42OTQsLTIuMjJjLTEuNzMyLC0xLjgyNSAtMy41NjMsLTMuNDMgLTUuNzU0LC00LjY1OGMtMS40MzUsLTAuODA0IC0yLjcxMiwtMS40ODIgLTQuMzA5LC0xLjQ1OHptMS4wNzUsMy42MjNjMC41NDYsMCAxLjE3NiwwLjE3MyAxLjg1MywwLjVjMS42ODgsMC44MTcgMy40MjIsMi45NjEgLTAuMDE1LDQuMTk1Yy0wLjkzNSwwLjMzNiAtMy45LC0wLjgyNCAtMy44MSwtMi40MDdjMC4wOSwtMS41NyAwLjg1NCwtMi4yODkgMS45NzIsLTIuMjg4em0wLjI4NSwxLjM2N2MtMC4zMTcsLTAuMDAyIC0wLjU3NSwwLjA3OSAtMC42OTQsMC4yNjNjLTAuNTU3LDAuODYxIC0wLjMwMywxLjQ3MiAwLjIxMiwxLjg2MmMwLjE5MiwtMC40NTcgMi4xNTYsMC4wNDMgMi4xNDgsMC40NzJhMC4zMiwwLjMyIDAgMCAwIDAuMDU1LC0wLjAzMmMxLjcwNCwtMS4yODIgLTAuNDcyLC0yLjU1NyAtMS43MiwtMi41NjVsLTAuMDAxLDB6IiBmaWxsPSIjNTQ0ODdhIiBpZD0ic3ZnXzEiLz4KIDwvZz4KPC9zdmc+' },
		{ name: 'Artix-Logo', url: 'https://img.shields.io/badge/OS-Artix-9cf?style=for-the-badge&labelColor=E9E9E9&color=625BC7&logoColor=10A0CC&logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHRpdGxlPkFydGl4IExpbnV4PC90aXRsZT4KCiA8ZyBjbGFzcz0ibGF5ZXIiPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8cGF0aCBkPSJtMTIsMGwtNC4xMjcsOC40NjJsMTEuMzU4LDYuMzYzbC03LjIzMSwtMTQuODI1em0tNS4zNzQsMTEuMDE4bC02LjMzMSwxMi45ODJsMTguNzg4LC03Ljc2MmwtMTIuNDU3LC01LjIyem0xMy44NDYsNi4zNTJsLTUuOTI2LDMuNDAybDkuMTYsMy4yMjhsLTMuMjM0LC02LjYzeiIgZmlsbD0iIzEwYTBjYyIgaWQ9InN2Z18xIi8+CiA8L2c+Cjwvc3ZnPg==' },
		{ name: 'NeoVim-Logo', url: 'https://img.shields.io/badge/Editor-NeoVim-informational?style=for-the-badge&labelColor=E9E9E9&color=625BC7&logo=neovim' },
		{ name: 'VSCodium-Logo', url: 'https://img.shields.io/badge/Editor-VSCodium-9cf?style=for-the-badge&labelColor=E9E9E9&color=625BC7&logoColor=007ACC&logo=visualstudiocode' }
	],
	certificateAccordion: [
		{ show: n => `Certificates (${n} more)`, hide: 'Hide' },
		{ show: n => `Certificats (${n} en plus)`, hide: 'Cacher' },
		{ show: n => `Zertifikate (${n} mehr)`, hide: 'Ausblenden' },
		{ show: n => `Certificados (${n} más)`, hide: 'Ocultar' },
		{ show: n => `Certificati (${n} in aggiunta)`, hide: 'Hide' },
		{ show: n => `Сертификаты (${n} в дополнение)`, hide: 'Скрыть' }
	],
	skill_names: [
		['General knowledge', 'Frameworks', 'Languages', 'Others'],
		['Connaissances générales', 'Frameworks', 'Langages', 'Autres'],
		['Allgemeines Wissen', 'Rahmenwerke', 'Sprachen', 'Andere'],
		['Conocimientos generales', 'Marcos', 'Idiomas', 'Otros'],
		['Conoscenza generale', 'Frameworks', 'Lingue', 'Altro'],
		['Общие знания', 'Основы', 'Языки', 'Другое']
	],
	skills_table_titles: [
		['Skill name', 'LinkedIn Validation', 'Estimated Level'],
		['Nom Compétence', 'Validation LinkedIn', 'Niveau estimé'],
		['Skill-Name', 'LinkedIn Validierung', 'Geschätztes Stufe'],
		['Nombre Habilidad', 'Validación LinkedIn', 'Nivel Estimado'],
		['Nome competenza', 'Convalida LinkedIn', 'Livello stimato'],
		['Название компетенции', 'Проверка LinkedIn', 'Предполагаемый уровень']
	],
	skills: [
		[ // General knowledge
			{ name: ['Object-Oriented Programming (OOP)', 'Programmation Orientée Objet (POO)', 'Objektorientierte Programmierung', 'Programación orientada a objetos (POO)', 'Programmazione orientata agli oggetti (OOP)', 'Объектно-ориентированное программирование (ООП)'], has_linked_badge: true, level: 90 },
			{ name: ['Machine Learning', 'Apprentissage automatique', 'Maschinelles Lernen', 'Aprendizaje automático', 'Apprendimento automatico', 'Машинное обучение'], has_linked_badge: true, level: 85 },
			{ name: ['Deep Learning', 'Apprentissage profond', 'Tiefes Lernen', 'Aprendizaje profundo', 'Apprendimento profondo', 'Глубокое обучение'], level: 90 },
			{ name: ['Agile Method', 'Méthode Agile', 'Agile Methode', 'Método ágil', 'Metodo agile', 'Agile-метод'], level: 50 },
		],
		[ // Frameworks
			{ name: 'Android', has_linked_badge: true, level: 75 },
			{ name: 'Angular', has_linked_badge: true, level: 70 },
			{ name: 'React.js', has_linked_badge: true, level: 85 },
			{ name: 'VueJS', level: 70 },
			{ name: 'Arduino', level: 80 },
			{ name: 'PyTorch', level: 80 },
			{ name: 'Tensorflow', level: 65 },
			{ name: 'Keras', level: 80 },
		],
		[ // Languages
			{ name: 'Bash', has_linked_badge: true, level: 80 },
			{ name: 'C', has_linked_badge: true, level: 85 },
			{ name: 'C++', has_linked_badge: true, level: 70 },
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
		[ // Others
			{ name: 'Git', has_linked_badge: true, level: 80 },
			{ name: 'Linux', has_linked_badge: true, level: 80 },
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
		['Forschungsprojekte 🔬', 'Schulprojekte 🏫', 'Persönliche Projekte 🚀'],
		['Proyectos de investigación 🔬', 'Proyectos escolares 🏫', 'Proyectos personales 🚀'],
		["Progetti di ricerca 🔬", "Progetti scolastici 🏫", "Progetti personali 🚀"],
		['Исследовательские проекты 🔬', 'Школьные проекты 🏫', 'Личные проекты 🚀']
	],
	projects: [
		[
			{
				title: "Wimmics's SemanticWebBenchmarker",
				service: ['Semantic Web', 'Web sémantique', 'Semantisches Web', 'Web semántica', 'Web semantico', 'Семантическая паутина'],
				desc: [
					'Platform to easily evaluate different RDF engines on different comparators',
					'Plateforme pour évaluer facilement différents moteurs RDF sur différents comparateurs',
					'Plattform zur einfachen Bewertung verschiedener RDF-Engines auf verschiedenen Vergleichsgeräten',
					'Plataforma para evaluar fácilmente diferentes motores RDF en diferentes comparadores',
					'Piattaforma per valutare facilmente diversi motori RDF su diversi comparatori',
					'Платформа для простой оценки различных движков RDF на различных компараторах'
				],
				techs: ['Docker', 'Bash', 'RDF', 'SPARQL'],
				imageIcon: FaTasks,
				src: 'https://github.com/SemanticWebBenchmarker'
			}
		],	[
			{
				title: 'JeuDeGoIA',
				service: ['MiniMax', 'MiniMax', 'MiniMax', 'MiniMax', 'MiniMax', 'Minimax'],
				desc: [
					'Implementation of an AI playing Go',
					"Implémentation d'une IA jouant au jeu de Go",
					'Implementierung einer Go spielenden KI',
					'Implementación de una IA que juega al Go',
					'Implementazione di una IA che gioca al gioco del Go',
					'Реализация искусственного интеллекта, играющего в го'
				],
				techs: ['HTML', 'CSS', 'Javascript'],
				imageSrc: JeuDeGoIAImage,
				src: 'https://github.com/saundersp/JeuDeGoIA',
				url: 'https://saundersp.github.io/JeuDeGoIA/'
			}, {
				title: 'ESP32Manager',
				service: ['IoT / Machine learning', 'IoT / Apprentissage automatique', 'IoT / Maschinelles Lernen', 'IoT / Aprendizaje automático', 'IoT / Apprendimento automatico', 'IoT / Машинное обучение'],
				desc: [
					'IoT Project to manage, handle, and predict anomalies on ESP32 boards',
					'Projet IoT pour configurer, gérer, et prédire des pannes de carte ESP32',
					'IoT-Projekt zur Verwaltung, Handhabung und Vorhersage von Anomalien auf ESP32-Boards',
					'Proyecto IoT para configurar, gestionar y predecir los fallos de la placa ESP32',
					'Progetto IoT per configurare, gestire e prevedere i guasti della scheda ESP32',
					'IoT-проект для конфигурирования, управления и прогнозирования отказов платы ESP32'
				],
				techs: ['VueJS', 'Arduino', 'Python', 'NodeJS', 'Scikit-Learn'],
				imageSrc: 'https://raw.githubusercontent.com/saundersp/ESP32Manager/master/front/src/assets/logo.png',
				src: 'https://github.com/saundersp/ESP32Manager'
			}, {
				title: 'EtudePopulationMondiale',
				service: ['Data mining', 'Exploration de données', 'Data-Mining', 'Minería de datos', 'Estrazione di dati', 'Добыча данных'],
				desc: [
					'Study on the evolution of the global population',
					"Étude de l'évolution de la population mondiale",
					'Studie über die Entwicklung der Weltbevölkerung',
					'Estudio de la evolución de la población mundial',
					"Studio dell'evoluzione della popolazione mondiale",
					'Изучение эволюции населения мира'
				],
				techs: ['R', 'Jupyter', 'Bash', 'tidyverse'],
				imageSrc: EtudePopulationMondiale,
				src: 'https://github.com/saundersp/EtudePopulationMondiale',
				url: 'https://nbviewer.jupyter.org/github/saundersp/EtudePopulationMondiale/blob/master/Study%20on%20the%20evolution%20of%20the%20global%20population.ipynb'
			}, {
				title: 'HBaseMonitoring',
				service: ['Database', 'Base de données', 'Datenbank', 'Base de datos', 'Database', 'База данных'],
				desc: [
					'HBase Database Manager Technology Monitoring',
					'Veille technologique du gestionnaire de base de données HBase',
					'HBase Database Manager Technology Watch',
					'Vigilancia tecnológica del gestor de bases de datos HBase',
					'Orologio tecnologico del gestore di database HBase',
					'Наблюдение за технологией управления базами данных HBase'
				],
				techs: ['Java', 'Maven'],
				imageSrc: HBase,
				src: 'https://github.com/ThomasGauci/HBaseProjet'
			}, {
				title: '7Wonders',
				service: ['Video Game', 'Jeu vidéo', 'Videospiel', 'Videojuego', 'Gioco video', 'Видеоигра'],
				desc: [
					'Command line implementation of the 7Wonders board game',
					'Implémentation en ligne de commande du jeu de plateau 7Wonders',
					'Kommandozeilenimplementierung des 7Wonders Brettspiels',
					'Implementación en línea de comandos del juego de mesa 7Wonders',
					'Implementazione a riga di comando del gioco da tavolo 7Wonders',
					'Реализация командной строки настольной игры 7Wonders'
				],
				techs: ['Java', 'Maven'],
				imageSrc: SevenWonders,
				src: 'https://github.com/RemiFELIN/7Wonders_By_Miagestics',
				download_url: 'https://github.com/RemiFELIN/7Wonders_By_Miagestics/archive/refs/tags/LivraisonFinale.zip'
			}, {
				title: 'QCMJump',
				service: ['Video Game', 'Jeu vidéo', 'Videospiel', 'Videojuego', 'Gioco video', 'Видеоигра'],
				desc: [
					'Multiple choice quiz game with a platform game component',
					'Jeu de questionnaire à choix multiples avec une composante de jeu de plateforme',
					'Multiple-Choice-Quizspiel mit einer Plattformspielkomponente',
					'Juego de preguntas de opción múltiple con un componente de juego de plataformas',
					'Gioco a quiz a scelta multipla con una componente di gioco a piattaforme',
					'Игра-викторина с множественным выбором и компонентом игры-платформы'
				],
				techs: ['HTML', 'Javascript'],
				imageSrc: QCMJump,
				src: 'https://github.com/FulconisYan/QCMJump',
				url: 'https://fulconisyan.github.io/QCMJump'
			}
		],	[
			{
				title: 'VAE',
				service: ['Deep learning', 'Apprentissage profond', 'Tiefes Lernen', 'Aprendizaje profundo', 'Apprendimento profondo', 'Глубокое обучение'],
				desc: [
					'Implementation of the Variational Auto Encoder',
					"Implémentation de l'encodeur automatique variationnel",
					'Implementierung des Variational Auto Encoders',
					'Implementación del codificador variacional automático',
					'Implementazione del codificatore variazionale automatico',
					'Реализация автоматического вариационного кодера'
				],
				techs: ['Python', 'PyTorch', 'Bash', 'Docker'],
				imageSrc: VAEImage,
				src: 'https://github.com/saundersp/VariationalAutoEncoder',
				url: 'https://nbviewer.jupyter.org/github/saundersp/VariationalAutoEncoder/blob/main/Variational%20Auto%20Encoder.ipynb'
			}, {
				title: 'WGAN-GP',
				service: ['Deep learning', 'Apprentissage profond', 'Tiefes Lernen', 'Aprendizaje profundo', 'Apprendimento profondo', 'Глубокое обучение'],
				desc: [
					'Implementation of the Wasserstein GAN with gradient penalty',
					'Implémentation du Wasserstein GAN avec pénalité de gradient',
					'Implementierung des Wasserstein-GANs mit Gradientenstrafe',
					'Implementación del GAN de Wasserstein con penalización de gradiente',
					'Implementazione di Wasserstein GAN con penalità di gradiente',
					'Реализация GAN Вассерштейна с градиентным штрафом'
				],
				techs: ['Python', 'Tensorflow'],
				imageSrc: WGANGPImage,
				src: 'https://github.com/saundersp/wgan-gp'
			}, {
				title: 'FlappAI',
				service: ['Genetic algorithm', 'Algorithme génétique', 'Genetischer Algorithmus', 'Algoritmo genético', 'Algoritmo genetico', 'Генетический алгоритм'],
				desc: [
					'AI Playing Flappy Bird',
					'IA jouant à Flappy Bird',
					'KI Spielt Flappy Bird',
					'IA jugando a Flappy Bird',
					'AI che gioca a Flappy Bird',
					'ИИ играет в Flappy Bird'
				],
				techs: ['HTML', 'Sass', 'Javascript'],
				imageSrc: FlappyIAImage,
				url: 'https://saundersp.github.io/FlappAI/',
				src: 'https://github.com/saundersp/FlappAI'
			}, {
				title: 'SimpleGradientDescent',
				service: ['Deep learning', 'Apprentissage profond', 'Tiefes Lernen', 'Aprendizaje profundo', 'Apprendimento profondo', 'Глубокое обучение'],
				desc: [
					'Implementation of gradient descent with different optimization methods',
					"Implémentation d'une descente de gradient avec diverses technique d'optimisation",
					'Implementierung des Gradientenabstiegs mit verschiedenen Optimierungsverfahren',
					'Aplicación del descenso de gradiente con diversas técnicas de optimización',
					'Implementazione della discesa del gradiente con varie tecniche di ottimizzazione',
					'Реализация градиентного спуска с использованием различных методов оптимизации'
				],
				techs: ['Python', 'Jupyter', 'Numpy', 'Matplotlib'],
				imageSrc: GradientDescentImage,
				src: 'https://github.com/saundersp/SimpleGradientDescent',
				url: 'https://nbviewer.jupyter.org/github/saundersp/SimpleGradientDescent/blob/master/Linear%20Regression.ipynb'
			}, {
				title: 'ToolboxModule',
				service: ['Javascript module', 'Module Javascript', 'Javascript-Modul', 'Módulo Javacsript', 'Modulo Javacsript', 'Модуль Javacsript'],
				desc: [
					'Module including several functions reusable for various projects',
					'Module incluant plusieurs fonctions réutilisables pour divers projets',
					'Modul mit mehreren Funktionen, die für verschiedene Projekte wiederverwendbar sind',
					'Módulo que incluye varias funciones reutilizables para varios proyectos',
					'Modulo che include diverse funzioni riutilizzabili per vari progetti',
					'Модуль, включающий несколько многократно используемых функций для различных проектов'
				],
				techs: ['Javascript', 'NodeJS'],
				imageIcon: FaToolbox,
				src: 'https://github.com/saundersp/ToolboxModule'
			}, {
				title: 'MarioSokoban',
				service: ['Video Game', 'Jeu vidéo', 'Videospiel', 'Videojuego', 'Gioco video', 'Видеоигра'],
				desc: [
					"A Mario's themed sokoban game",
					'Un jeu de Sokoban sur le thème de Mario',
					'Ein Sokoban-Spiel mit Marios Thema',
					'Un juego de Sokoban con temática de Mario',
					'Un gioco Sokoban sul tema di Mario',
					'Игра Сокобан на тему Марио'
				],
				techs: ['C++', 'SDL', 'Adobe Illustrator'],
				imageSrc: 'https://raw.githubusercontent.com/saundersp/MarioSokoban/master/bin/data/menus/instructions_jeu.png',
				src: 'https://github.com/saundersp/MarioSokoban',
				download_url: 'https://github.com/saundersp/MarioSokoban/releases/download/1.0/MarioSokoban.zip'
			}
			/*
			{
				title: '', // Title of the project
				service: ['UK', 'FR', 'DE', 'ES', 'IT', 'RU'], // Category of work (JS/ML ...)
				desc: ['UK', 'FR', 'DE', 'ES', 'IT', 'RU'], // Description
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
