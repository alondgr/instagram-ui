import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getOne } from '../services/post.service';
import config from '../config/index';
import './PostPage.scss';

export default function PostPage() {

    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        getOne(id)
            .then(data => setPost(data))
            .catch(console.log('err'))
    }, [id])

    console.log(id);

    return (
        <div className="PostPage">
            {post && <div>
                <div>
                    <img src={config.apiUrl + '/' + post.image} />
                    <strong>{post.author.username}</strong>
                </div>
                <p>{post.body}</p>
            </div>}
        </div>
    )
}
