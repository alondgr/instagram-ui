import React, { useContext, useState, useEffect } from 'react';
import './PostLike.scss';
import { UserContext } from '../../../App';
import { postLike, postUnlike } from '../../../services/post.service';

function PostLike({ postId, likes }) {
    const { user } = useContext(UserContext);
    const [likesCount, setLikesCount] = useState(likes.length);
    const [hasLiked, setHasLiked] = useState(likes.includes(user._id));

    function like() {
        setHasLiked(true);
        setLikesCount(prev => prev + 1);
        postLike(postId).catch(() => setHasLiked(false));
    }

    function unlike() {
        setHasLiked(false);
        setLikesCount(prev => prev - 1);
        postUnlike(postId).catch(() => setHasLiked(true));
    }

    useEffect(() => {
        setHasLiked(likes.includes(user._id))
    }, [user, likes]);

    return (
        <div className="likes">
            {hasLiked
                ? <button onClick={unlike}>Unlike</button>
                : <button onClick={like}>Like</button>}
            <span>{likesCount} likes</span>
        </div>
    );
}

export default PostLike;