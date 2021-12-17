import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import { Fade } from 'react-awesome-reveal';
import '../scss/About.scss';
import info from '../data/info';
import Certificate from './Certificate';
import { useLang } from '../services/LanguageService';
const { skills, aboutImage, name, certificates, skills_table_titles, badges } = info;

export default function About() {
	const { t , getLangIndex } = useLang();
	const [imageLoadingError, setImageLoadingError] = useState(false);
	const [showAllCertificates, setShowAllCertificates] = useState(false);
	const { hide, show } = t('certificateAccordion');

	return (
		<Fade direction='left' duration={500} cascade triggerOnce>
			<div className='about'>
				<h1 className='heading'>{t('menu.about')}</h1>
				<div className='about-content'>
					<div className='description'>
						<p>{t('aboutText')}</p>
						<div className='badges'>
							{badges.map((e, i) => <a key={i} href={e.url}><img alt={e.name} src={e.src}/></a>)}
						</div>
						<button className='showAllCertificates' onClick={_ => setShowAllCertificates(!showAllCertificates)}>
							{showAllCertificates ? (<><BsChevronUp />{hide}<BsChevronUp /></>)
								: (<><BsChevronDown />{show(certificates.length - 3)}<BsChevronDown /></>)}
						</button>
						<div className='certificates-content'>
							{certificates.reduce((tab, certificate, index) => {
								if (index < 3 || showAllCertificates)
									tab.push(<Certificate key={index} certificate={certificate} />);
								return tab;
							}, [])}
						</div>
					</div>
					{(aboutImage && !imageLoadingError) &&
						<img decoding='async' src={aboutImage} alt={name} onError={_ => setImageLoadingError(true)} />}
				</div>

				<h2 className='heading'>{t('menu.skills')}</h2>
				{info.skill_names[getLangIndex()].reduce((tab, k, j) => {
					tab.push(<h3 key={'h' + k} className="skill-title">{k}</h3>);
					tab.push(<table key={'t' + k} className="skill-table">
						<colgroup>
							<col style={{ width: "30%" }} />
							<col style={{ width: "30%" }} />
							<col style={{ width: "40%" }} />
						</colgroup>
						<thead>
							<tr>{skills_table_titles[getLangIndex()].map(t => <th key={t}>{t}</th>)}</tr>
						</thead>
						<tbody>
							{skills[j].map((skill, i) => <tr key={j * skills[j].length + i}>
								<td>{Array.isArray(skill.name) ? skill.name[getLangIndex()] : skill.name}</td>
								<td>{skill.has_linked_badge && <HiOutlineClipboardCheck color="#0a66c2" />}</td>
								<td><div className="outer-bar">
									<div className="inner-bar" style={{ width: skill.level + '%' }}>{skill.level}%</div>
								</div></td>
							</tr>)}
						</tbody>
					</table>);
					return tab;
				}, [])}
			</div>
		</Fade >
	);
}
