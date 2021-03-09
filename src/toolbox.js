import { createElement } from 'react';
import { IconType } from 'react-icons';

export function loadResource(path: string): Promise<any> {
	return new Promise(async (resolve, reject) => {
		try {
			return resolve((await import(`./data/${path}`)).default);
		} catch (error) {
			reject(error);
		}
	});
}

export function createLink(href: string, inner: string) {
	return (<a target='_blank' rel='noopener noreferrer' href={href}> <span>{inner}</span></a>);
}

export function createElementLink(tag: string | IconType, href: string, inner: string) {
	return (<a target='_blank' rel='noopener noreferrer' href={href}>{createElement(tag)} <span>{inner}</span></a>);
}

export function getAttr(obj: Object, index: string): any {
	for (const k of index.split('.'))
		if (k in obj)
			obj = obj[k];
		else
			return;
	return obj;
}