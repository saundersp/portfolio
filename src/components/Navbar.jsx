import { GiHamburgerMenu } from 'react-icons/gi';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';
import { GrClose } from 'react-icons/gr';
import '../scss/Navbar.scss';
import { useLang } from '../services/LanguageService';
import info from '../data/info';
const { languages } = info;

export default function Navbar({ menu }) {
	const { t, changeLang } = useLang();
	return (
		<nav>
			<div className='show-mobile ham' onClick={menu.show}><GiHamburgerMenu /></div>
			<ul className='show-desktop' ref={menu.navRef}>
				<li className='closeBtn'><div onClick={menu.hide}><GrClose color='#FFFFFFBB' /></div></li>
				<li><Link className='link' activeClass='active' to='App-header'
					spy smooth offset={-70} duration={500}>
					<Fade direction="left" duration={500} cascade triggerOnce>{t('menu.home')}</Fade>
				</Link></li>
				<li><Link className='link' activeClass='active' to='work'
					spy smooth offset={-70} duration={500}>
					<Fade direction="left" duration={500} cascade triggerOnce>{t('menu.work')}</Fade>
				</Link></li>
				<li><Link className='link' activeClass='active' to='about'
					spy smooth offset={-70} duration={500}>
					<Fade direction="left" duration={500} cascade triggerOnce>{t('menu.about')}</Fade>
				</Link></li>
				<li><Link className='link' activeClass='active' to='contact'
					spy smooth offset={-70} duration={500}>
					<Fade direction="left" duration={500} cascade triggerOnce>{t('menu.contact')}</Fade>
				</Link></li>
				<li className='langs'>
					{languages.map((lang, index) =>
						<button key={index} onClick={_ => changeLang(index)}>
							<img src={`https://flagcdn.com/w80/${lang.code.toLowerCase()}.png`} alt={lang.name} />
						</button>
					)}
				</li>
			</ul>
		</nav >
	);
}
