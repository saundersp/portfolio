import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	name: 'Saunders Pierre',
	languages: [{ name: 'English', code: 'GB' }, { name: 'Français', code: 'FR' }, { name: 'Deutsch', code: 'DE' }],
	aboutImage: 'https://avatars2.githubusercontent.com/u/44078749?s=460&u=77f8a7d52596ac662b7dc000cfc4398ce8b519a2&v=4',
	social: [
		{ name: 'GitHub', icon: FaGithub, url: 'https://github.com/saundersp' },
		{ name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/pierre-saunders' },
		{ name: 'Mail', icon: FaMailBulk, url: 'mailto:pierre.saunders@etu.unice.fr' }
	],
	certificates: [
		{ title: 'Artificial Intelligence A-Z Learn How To Build An AI', author: 'SuperDataScience Team' },
		{ title: 'Machine Learning A-Z Hands-On Python & R In Data Science', author: 'SuperDataScience Team' },
		{ title: 'Deep Learning A-Z Hands-On Artificial Neural Networks', author: 'SuperDataScience Team' },
		{ title: 'Discrete Mathematics', author: 'Miran Fattah' },
		{ title: 'VueJS', author: 'Enzo Ustariz' },
		{ title: 'Javascript ES6', author: 'K.Sathyaprakash Reddy' },
		{ title: 'Music Theory Levels 1, 2 & 3', author: 'Jason Allen' }
	]
}