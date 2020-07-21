import React from 'react';
import { FaToolbox } from 'react-icons/fa';
import FlappyIAImage from './images/FlappyIA.png';
import JeuDeGoIAImage from './images/JeuDeGoIA.png';
import GradientDescentImage from './images/GradientDescent.png';
import WGANGPImage from './images/WGANGP.png';
import CVFR from './CV Pierre Saunders - FR.pdf';
import CVUK from './CV Pierre Saunders - UK.pdf';

export default {
    menu: {
        home: ['Accueil', 'Home'],
        about: ['À propos', 'About'],
        work: ['Travaux', 'Work'],
        contact: ['Contacter', 'Contact'],
        liveDemo: ['Démo live', 'Live demo'],
        CV: 'Curriculum vitæ',
        approach: [
            <>Créons ensemble votre<br /><span className='amazing-color'>prochaine expérience</span></>,
            <>Let’s create your next<br /><span className='amazing-color'>experience together</span></>
        ],
        // TODO Change to final github repo
        credits: [
            <>Site crée avec React <a target='_blank' rel="noopener noreferrer" href={'https://github.com/saundersp/portfolio'}> source</a></>,
            <>Made using React <a target='_blank' rel="noopener noreferrer" href={'https://github.com/saundersp/portfolio'}> Source Code</a></>
        ]
    },
    headerTagline: [
        [
            'Bonjour 👋 vous m\'avez trouvé(e)!',
            'Je suis Pierre Saunders, ',
            'Étudiant en machine learning'
        ], [
            'Hi 👋 You found me!',
            'I am Saunders Pierre, ',
            'Student in machine learning'
        ]
    ],
    CV: [CVFR, CVUK],
    aboutText: [
        <>Actuellement étudiant en 2ème année de Master MIAGE à Sophia-Antipolis. J'ai toujours été passionnée par l'informatique et ses possibilités.</>,
        <>Currently a 2nd year Master MIAGE student in Sophia-Antipolis. I have always been fascinated about IT and its possibilities.</>
    ],
    projects: [
        {
            title: 'WGAN-GP',
            service: 'Deep learning',
            desc: [
                'Implémentation du Wasserstein GAN avec pénalité de gradient',
                'Implemenation of the Wasserstein GAN with gradient penalty'
            ],
            techs: ["Python", "Tensorflow"],
            imageSrc: WGANGPImage,
            src: 'https://github.com/saundersp/wgan-gp'
        },
        {
            title: 'FlappAI',
            service: 'Reinforcement learning (N.E.A.T)',
            desc: [
                'IA jouant à Flappy bird',
                'AI Playing Flappy bird'
            ],
            techs: ["HTML", "CSS", "Javascript"],
            imageSrc: FlappyIAImage,
            url: 'https://saundersp.github.io/FlappAI/',
            src: 'https://github.com/saundersp/FlappAI'
        },
        {
            title: 'JeuDeGoIA',
            service: 'MinMax',
            desc: [
                'Implémentation d\'une IA jouant au jeu de Go',
                'Implementation of an AI playing Go'
            ],
            techs: ["HTML", "CSS", "Javascript"],
            imageSrc: JeuDeGoIAImage,
            url: 'https://saundersp.github.io/JeuDeGoIA/',
            src: 'https://github.com/saundersp/JeuDeGoIA'
        },
        {
            title: 'SimpleGradientDescent',
            desc: [
                'Implémentation d\'une descente de gradient avec diverses technique d\'optimisation',
                'Implementation of gradient descent with differents optimisation techniques'
            ],
            service: 'Deep Learning',
            techs: ["Python", "Jupyter", "Numpy", "Matplotlib"],
            imageSrc: GradientDescentImage,
            src: 'https://github.com/saundersp/SimpleGradientDescent',
            url: 'https://github.com/saundersp/SimpleGradientDescent/blob/master/Linear%20Regression.ipynb'
        }, {
            title: "ToolboxModule",
            desc: [
                'Module incluant plusieurs fonctions réutilisables pour divers projets',
                'Module including several functions reusable for various projects'
            ],
            service: 'Javascript module',
            techs: ["Javascript", "NodeJS"],
            imageIcon: FaToolbox,
            src: 'https://github.com/saundersp/ToolboxModule'
        }
		/*
		{
			name: '', // Name of the project
			desc: ['FRRRR', 'UKKKK'], // Description
			service '', // Categorie of work (JS/ML ...)
			tech: [], // List of technologies used (Javascript / Python ...)
			imageSrc: '', // Link to a representative image
			src: '', // Github link / Source code
			url: '' // Live demo [optional]
		}
		*/
    ]
};