import { isEmpty } from 'lodash';
import Link from 'next/link';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { isCustomPageUri } from '../../../utils/slug';

const Nav = ({ header, headerMenus, slug }) => {

	if (isEmpty(headerMenus)) {
		return null;
	}
	const [isMenuVisible, setMenuVisibility] = useState(false);

	return (
		<nav className="flex items-center justify-between flex-col bg-white-500 p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<Link href="/">
					<img src={header?.sourceUrl ?? ''} alt="" width="85" height="85" className="mr-4" />
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
			<div className={`${isMenuVisible ? 'max-h-full' : 'h-0'} overflow-hidden w-full lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
				{headerMenus?.length ? (
					<div className="text-sm lg:flex-grow">
						{headerMenus?.map(menu => {
							if (!isCustomPageUri(menu?.node?.path)) {
								return (
									<Link className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4"
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
