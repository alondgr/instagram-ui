import React from 'react';
import Avatar from '../../common/Avatar/Avatar';
import './SearchResult.scss';
import { Link } from 'react-router-dom';

function SearchResult({ user }) {
    return (
        <Link to={'/profile/' + user.username}>
            <div className="SearchResult">
                <Avatar />
                {user.username}
            </div>
        </Link>
    );
}

export default SearchResult;