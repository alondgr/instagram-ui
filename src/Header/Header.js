import React from 'react';
import Logo from './Logo/Logo'
import HeaderProfile from './HeaderProfile/HeaderProfile';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import Menu from './Menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';


export default function Header() {
    return (
        <div className="Header">
            <Logo />
            <Menu />
            <HeaderProfile />    
                <DropdownMenu icon={<FontAwesomeIcon icon={faCaretDown} className="caret"></FontAwesomeIcon>}>
                    <ul>
                        <li className="dropdown-item">Settings</li>
                        <li className="dropdown-item">Support</li>
                        <li className="dropdown-item">Log out</li>
                    </ul>
                </DropdownMenu>
        </div>
    )
}
