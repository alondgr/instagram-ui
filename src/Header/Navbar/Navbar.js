import React, { useState } from 'react';

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    )
    function NavItem(props) {

        const [open, setOpen] = useState(false);

        return (
            <li className="nav-item">
                <NavItem />
                <a href="#" className="icon-button" onMouseEnter={() => setOpen(!open)}>
                    {props.icon}
                </a>
                {open && props.children}
            </li>
        );
    }

    function DropdownMenu() {

        function DropdownItem(props) {
            return (
                <a href="#" className="menu-item">
                    {props.children}
                </a>
            )
        }
        return (
            <div className="dropdown">
                <DropdownItem>Log Out </DropdownItem>
                <DropdownItem>Settings </DropdownItem>
                <DropdownItem>Support </DropdownItem>

            </div>
        )
    }
}
