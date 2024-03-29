import { createContext, useContext, useState } from 'react';
import info from '../data/info';
import { getAttr } from '../toolbox';

const LangContext = createContext(null);

export default function LanguageService(props) {
	const [lang, changeLang] = useState(0);

	const value = {
		t: (tag => getAttr(info, tag)[lang]),
		changeLang,
		getLangIndex: (() => lang),
		getLangCode: (() => props.availableLangs[lang])
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
