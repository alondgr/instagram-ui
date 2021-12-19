import React, { useContext, useState, useEffect, useCallback } from 'react';
import Avatar from '../Avatar/Avatar';
import './Post.scss';
import { Link } from 'react-router-dom';
import config from '../../config/index';
import { UserContext } from '../../App';
import PostDate from './PostDate/PostDate';
import PostLike from './PostLike/PostLike';
import { createComment, getComments } from '../../services/post.service';



function Post({ data }) {

    const [comments, setComments] = useState([]);
    const [commentValue, setCommentValue] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const comments = await getComments(data._id);
                console.log('OK?!')
                console.log(comments)
                setComments(comments);
                console.log('COMMENTS: ', comments)
            } catch (err) {
                console.log(err)
            }
        }
        fetchComments();
    }, [data._id]);

    const submit = useCallback(async (e) => {
        e.preventDefault();
        console.log(data._id)
        const newComment = await createComment(data._id, commentValue);
        console.log('new comment', newComment)
        setComments([newComment, ...comments]);
        setCommentValue('');
    }, [data._id, commentValue, comments]);


    return (
        <div className="Post_wrapper">
            <article className="Post">
                <header>
                    <div className="Post__user">
                        <Link to={'/profile/' + data.author.username}>
                            <Avatar size="md" image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"} />
                            <span className="Post__user__username">{data.author.username}</span>
                        </Link>
                    </div>
                    <div className="Post__date">
                        <PostDate date={(data.createdAt)} />
                    </div>
                </header>
                <div className="Post__image">
                    <Link to={'/post/' + data._id}>
                        <img src={config.apiUrl + '/' + data.image} className="Post__image" alt="" />
                    </Link>
                </div>
                <div className="Post__content">
                    <h1 className="Post__description">{data.body}</h1>
                </div>
                <div>
                    <PostLike likes={data.likes} postId={data._id} />
                </div>
                <footer>
                    <form onSubmit={submit}>
                        <input value={commentValue} onChange={e => setCommentValue(e.target.value)}
                            type="text" placeholder="Write your comment" />
                        <button type="submit">Comment</button>
                    </form>
                    <ul>
                        {comments.map(comment => {
                            return <li key={data._id}>{comment.content}</li>
                        })}
                    </ul>
                </footer>
            </article>
        </div>
    );
}
export default Post;