import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusSquare, faSearch, faCoins } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Menu.scss';

function Menu() {
	return (
		<ul className="nav">
			<li className="nav-item">
				<Link className="nav-link" to="/">
					<FontAwesomeIcon icon={faHome} />
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/post/create">
					<FontAwesomeIcon icon={faPlusSquare} />
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/search">
					<FontAwesomeIcon icon={faSearch} />
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/convert">
					<FontAwesomeIcon icon={faCoins} />
				</Link>
			</li>
		</ul>
	);
}

export default Menu;






