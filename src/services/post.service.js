import config from '../config/index';

async function create(post) {
    console.log(post);

    const form = new FormData();
    form.append('body', post.body);
    form.append('image', post.image);

    const token = localStorage.getItem("token");
    const res = await fetch(config.apiUrl + '/post', {
        method: 'POST',
        body: form,
        headers: {
            'Authorization': token
        }
    });
    return res.json();
}

async function getFeed() {
    const res = await fetch(config.apiUrl + '/post');
    return res.json();
}

async function getPosts(username) {
    const token = localStorage.getItem("token");
    if (!token) return [];
    const res = await fetch(config.apiUrl + '/user/' + username + '/post', {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    });
    return res.json();
}

function postLike(postId) {
    return fetch(config.apiUrl + '/post/' + postId + '/like', {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    });
}

function postUnlike(postId) {
    return fetch(config.apiUrl + '/post/' + postId + '/unlike', {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    });
}
async function getOne(postId) {
    const res = await fetch(config.apiUrl + '/post/' + postId, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    });
    return res.json();
}

async function getComments(postId) {
    const res = await fetch(config.apiUrl + '/post/' + postId + '/comment', {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    });
    return res.json();
}

async function createComment(postId, content) {
    const res = await fetch(config.apiUrl + '/post/' + postId + '/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
            content
        })
    });
    return res.json();
}

export { create, getFeed, getPosts, postLike, postUnlike, getOne, getComments, createComment }