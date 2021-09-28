import { createElement } from 'react';

export function loadResource(path) {
	return new Promise(async (resolve, reject) => {
		try {
			return resolve((await import(`./data/${path}`)).default);
		} catch (error) {
			reject(error);
		}
	});
}

export function createLink(href, inner) {
	return (<a target='_blank' rel='noopener noreferrer' href={href}> <span>{inner}</span></a>);
}

export function createElementLink(tag, href, inner) {
	return (<a target='_blank' rel='noopener noreferrer' href={href}>{createElement(tag)} <span>{inner}</span></a>);
}

export function getAttr(obj, index) {
	for (const k of index.split('.'))
		if (k in obj)
			obj = obj[k];
		else
			return;
	return obj;
}
