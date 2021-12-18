import React, { useEffect, useState } from 'react';
import { getFeed } from '../services/post.service';
import Post from './../common/Post/Post';
import './Feed.scss';
function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			try {
				const posts = await getFeed();
				setPosts(posts.reverse());
			} catch (err) {
				console.log(err)
			}
		}
		getPosts();
	}, []);

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="feed">
			<div className="feed__wrapper">
				{posts.map((post) => <Post data={post} key={post.id} />)}
			</div>
		</div>
	);
}

export default Feed;