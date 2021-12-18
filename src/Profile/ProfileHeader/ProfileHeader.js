
import React, { useEffect, useState, useContext, useCallback } from 'react';
import { UserContext } from '../../App';
import Avatar from '../../common/Avatar/Avatar';
import { follow, getUser, unfollow, me as getMyself } from '../../services/user.service';
import './ProfileHeader.scss';


function ProfileHeader({ username, postNum }) {
	const { user: me, setUser: setMe } = useContext(UserContext);
	const [user, setUser] = useState({});
	const [isFollowing, setIsFollowing] = useState(me?.following?.includes(user._id));
	const handleFollow = () => {
		// setIsFollowing(true);
		follow(username).then(() => {
			getMyself()
				.then(loggedUser => {
					setMe(loggedUser);
				});
		}).catch(() => setIsFollowing(false));
	}

	const handleUnfollow = useCallback(() => {
		// setIsFollowing(false);
		unfollow(username).then(() => {
			getMyself()
				.then(loggedUser => {
					setMe(loggedUser);
				})
		}).catch(() => setIsFollowing(true));

	}, [username, setMe]);

	useEffect(() => {
		setIsFollowing(me?.following?.includes(user._id));
	}, [user, me]);
	console.log('me', me)
	console.log('user', user)
	useEffect(() => {
		async function initUser() {
			const {user} = await getUser(username);
			setUser(user);
		}
		initUser();
	}, [username]);

	return (
		<div className="profile__header">
			<div className="profile__avatar"><Avatar image={user.image} size="lg" /></div>
			<div>
				<h2>{user.username}</h2>
				<p>{postNum} posts</p>
				{me.username !== username ? isFollowing
					? <button onClick={handleUnfollow}>unfollow</button>
					: <button onClick={handleFollow}>follow</button> : null}
			</div>
		</div>
	);
}

export default ProfileHeader;