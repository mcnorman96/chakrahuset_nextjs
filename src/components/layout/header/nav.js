import { isEmpty } from 'lodash';
import Link from 'next/link';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { isCustomPageUri } from '../../../utils/slug';
import logo from '../../image/Chakrahuset.png';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Nav = ({ header, headerMenus, slug }) => {

	if (isEmpty(headerMenus)) {
		return null;
	}
	const [isMenuVisible, setMenuVisibility] = useState(false);

	return (
		<nav className="relative flex flex-col items-center justify-between py-2 bg-white-500 lg:pb-6 lg:pt-2">
			<div className="flex items-center flex-shrink-0 mb-2 text-white">
				<Link href="/">
					<img src={logo?.src} alt="" width="85" height="85" />
				</Link>
			</div>
			<div className="absolute block lg:hidden right-5 top-14 -translate-y-2/4 ">
				<button
					onClick={() => setMenuVisibility(!isMenuVisible)}
					className="flex items-center px-3 py-2 text-black-200"
					data-cy="mmenu-btn"
				>
					<svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<div className={`${isMenuVisible ? 'max-h-full' : 'h-0'} w-full lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
				{headerMenus?.length ? (
					<div className="container w-screen text-sm text-center lg:flex-grow primaryMenu">
						{headerMenus?.map((menu, index) => {
							if (!isCustomPageUri(menu?.node?.path)) {
								return (
									menu?.node && menu.node?.childItems?.edges.length > 0 ?
										<div className="relative block px-4 mt-4 lg:inline-block lg:mt-0 text-black-200 menu-dropDown group" key={index}>
											<Link data-cy="nav-item"  href={menu?.node?.path} className='pl-4 text-xs uppercase hover:text-green-600 menuItem'>
												{menu?.node?.label}
											</Link>
											<ArrowDownIcon className='mr-4 ' />
											<div className="absolute left-0 z-10 hidden pt-3 bg-white group-hover:block">
												{menu.node.childItems.edges.map((childItems, index) => {
													return (
														<Link className="block w-full px-4 py-3 mt-4 text-xs text-left uppercase lg:inline-block lg:mt-0 text-black-200 hover:text-green-600"
															data-cy="nav-item" key={index} href={childItems?.node?.path}>
															{childItems?.node?.label}
														</Link>
													)
												})}
											</div>
										</div>
										:
										<Link className="block px-4 mt-4 mr-4 text-xs uppercase lg:inline-block lg:mt-0 text-black-200 hover:text-green-600 menuItem"
											data-cy="nav-item" key={index} href={menu?.node?.path}>
											{menu?.node?.label}
										</Link>
								);
							}
						})}
					</div>
				) : null}
			</div>
		</nav>
	);
};

Nav.propTypes = {
	header: PropTypes.object,
	headerMenus: PropTypes.array,
	slug: PropTypes.string
};

Nav.defaultProps = {
	header: {},
	headerMenus: [],
	slug: ''
};

export default Nav;
