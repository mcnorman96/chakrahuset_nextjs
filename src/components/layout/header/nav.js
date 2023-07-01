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
		<nav className="flex items-center justify-between flex-col bg-white-500 p-6 ">
			<div className="flex items-center flex-shrink-0 text-white mb-2">
				<Link href="/">
					<img src={logo?.src} alt="" width="85" height="85" />
				</Link>
			</div>
			<div className="block lg:hidden">
				<button
					onClick={() => setMenuVisibility(!isMenuVisible)}
					className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
					data-cy="mmenu-btn"
				>
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<div className={`${isMenuVisible ? 'max-h-full' : 'h-0'} w-full lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
				{headerMenus?.length ? (
					<div className="text-sm lg:flex-grow primaryMenu container w-screen text-center">
						{headerMenus?.map(menu => {
							if (!isCustomPageUri(menu?.node?.path)) {
								return (
									menu?.node && menu.node?.childItems?.edges.length > 0 ?
									<div className="block mt-4 lg:inline-block lg:mt-0 text-black-200 px-4 menu-dropDown relative group">
											<Link data-cy="nav-item" key={menu?.node.id} href={menu?.node?.path} className='hover:text-green-600 text-xs uppercase menuItem pl-4'>
												{menu?.node?.label}
											</Link>
										<ArrowDownIcon className='mr-4 ' />
										<div className="absolute z-10 bg-white left-0 hidden group-hover:block border-green-600 border-y-2">
											{menu.node.childItems.edges.map((childItems) => {
												return (
													<Link className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-green-600 px-4 py-2 text-xs uppercase text-left w-full"
													data-cy="nav-item" key={childItems?.node.id} href={childItems?.node?.path}>
													{childItems?.node?.label}
													</Link>
												)
											})}
										</div>
									</div>
									:
									<Link className="text-xs uppercase block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-green-600 mr-4 menuItem px-4"
										data-cy="nav-item" key={menu?.node.id} href={menu?.node?.path}>
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
