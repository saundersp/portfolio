import { IoIosArrowDropdown } from 'react-icons/io';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';
import '../scss/Header.scss';
import { useLang } from '../services/LanguageService';
import Navbar from './Navbar';
import info from '../data/info';
const { name } = info;

export default function Header({ menu }) {
	const { t } = useLang();
	return (
		<div className='App-header'>
			<div className="heading-background">
				<h1>CREATIVE</h1>
			</div>
			<header>
				<h1><Fade direction="left" duration={200} cascade triggerOnce>
					{name}
				</Fade></h1>
				<Navbar menu={menu} />
			</header>
			<Fade direction="left" duration={200} cascade triggerOnce>
				<p className='header-title'>
						{`${t('headerTagLine')}\n`}
						<button>
						<Link to='contact' smooth offset={-70} duration={500}>
							{t('menu.contact')}
						</Link>
					</button>
				</p>
			</Fade>
			<div className='scrollIndicator'>
				<Link to='work' smooth offset={-70} duration={500}>
					<IoIosArrowDropdown />
				</Link>
			</div>
		</div >
	);
}
