import React from 'react';
import {Link} from 'react-router-dom';
import './Logo.scss';

export default function Logo() {
    return (
        <Link to={'/'}>
            <div className="Logo">
                Cryptogether
            </div>
        </Link>
    );
}
