import React, {useEffect, useState} from 'react';
import axios from "axios";


function PostsPage() {
    const [posts, setPosts] = useState([])
    const getPosts = () => {
        return axios.get("https://dummyjson.com/posts").then(resp => setPosts(resp.data.posts))
    }

    useEffect(() => {
        getPosts()
    }, []);
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default PostsPage;