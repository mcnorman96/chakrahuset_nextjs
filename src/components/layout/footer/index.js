import Link from 'next/link';
import logo from '../../image/Chakrahuset.png';

const Footer = () => {
	return (
		<footer className="py-16 bg-gray-200 ">
			<div className="container flex flex-col flex-wrap lg:flex-row max-lg:text-center">
				<div className="mx-auto lg:w-1/3">
					<Link href="/">
						<img className='max-lg:mx-auto' src={logo?.src} alt="" width="125" height="125" />
					</Link>
					<p>
						<b>Chakrahuset</b><br />
						Tåstruphøj 4, 4300 Holbæk<br />
						Email: <a href="mailto:info@chakrahuset.dk">info@chakrahuset.dk</a><br />
						Tlf:<a href="tlf:22222222"> 22 22 22 22</a>
					</p>
				</div>
				<div className="mx-auto lg:w-1/3">
					<p>
					<b>Åbningstider</b><br />
						Hverdage: 17.00 – 20.00<br />
						Lørdag: 9.00 – 15.00<br />
						Søndag: 9.00 – 15.00</p>
				</div>
				<div className="mx-auto lg:w-1/3">
					<b>Praktisk information</b>
					<div className="menu-praktisk-menu-container"><ul id="menu-praktisk-menu" className="menu"><li id="menu-item-192" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-192"><a href="https://chakrahuset.dk/om-chakrahuset/">Om Chakrahuset</a></li>
						<li id="menu-item-189" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-189"><a href="https://chakrahuset.dk/behandlere/">Behandlere</a></li>
						<li id="menu-item-191" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-191"><a href="https://chakrahuset.dk/kontakt-os/">Kontakt os</a></li>
					</ul></div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
