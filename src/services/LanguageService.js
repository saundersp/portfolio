import { createContext, useContext, useState } from 'react';
import info from '../data/info';

function getAttr(obj, index) {
	for (let k of index.split('.'))
		if (k in obj)
			obj = obj[k];
		else
			return;
	return obj;
}

const LangContext = createContext(null);

export default function LanguageService(props) {
	const [lang, changeLang] = useState(0);

	const value = {
		t: props.t || (tag => getAttr(info, tag)[lang]),
		changeLang: props.changeLang || changeLang,
		getLangIndex: props.getLangIndex || (() => lang)
	};

	return (
		<LangContext.Provider value={value}>
			{props.children}
		</LangContext.Provider>
	);
}

export function useLang() {
	return useContext(LangContext);
}
