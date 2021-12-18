import React, { useContext } from 'react'
import './HeaderProfile.scss';
import Avatar from '../../common/Avatar/Avatar';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu/DropdownMenu';



export default function HeaderProfile(props) {
    const { user } = useContext(UserContext)
    return (
        <div>
            <Link to={`/profile/${user.username}`}>
                <div className="HeaderProfile">
                    <Avatar image={user.image} size={'md'} />
                    <span className="HeaderProfile__username">{user.username}</span>
                </div>
            </Link>
        </div>
    )
}
