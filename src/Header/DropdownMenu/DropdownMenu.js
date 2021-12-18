import React, { useState } from 'react';
import './DropdownMenu.scss';


export default function DropdownMenu(props) {

    const [open, setOpen] = useState(false);

    return (
        <div className="container">
            <a href="#" className="icon-button" onMouseEnter={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </div>
    )
}
