import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

export default {
	name: 'Saunders Pierre',
	languages: [
		{ name: "Français", code: "FR" },
		{ name: "English", code: "GB" }
	],
	aboutImage: 'https://avatars2.githubusercontent.com/u/44078749?s=460&u=77f8a7d52596ac662b7dc000cfc4398ce8b519a2&v=4',
	social: [
		{
			name: 'GitHub',
			url: 'https://github.com/saundersp',
			icon: FaGithub
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/pierre-saunders',
			icon: FaLinkedin
		},
		{
			name: 'Mail',
			url: 'mailto:pierre.saunders@etu.unice.fr',
			icon: FaMailBulk
		}
	],
	certificates: [
		{
			title: 'Machine Learning A-Z Hands-On Python & R In Data Science',
			author: 'SuperDataScience Team'
		},
		{
			title: 'Deep Learning A-Z Hands-On Artificial Neural Networks',
			author: 'SuperDataScience Team'
		},
		{
			title: 'Discrete Mathematics',
			author: 'Miran Fattah'
		},
		{
			title: 'VueJS',
			author: 'Enzo Ustariz'
		},
		{
			title: 'Javascript ES6',
			author: 'K.Sathyaprakash Reddy'
		},
		{
			title: 'Music Theory Levels 1, 2 & 3',
			author: 'Jason Allen'
		}
	]
};