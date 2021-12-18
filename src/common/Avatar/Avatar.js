import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';

export default function Avatar({ image, size }) {
    return (
        <div className={`Avatar ${size || 'md'}`}>
            <img src={image || "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"} alt="avatar" className="Avatar__image" />
        </div>
    )
}

Avatar.prototypes = {
    image: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
};
