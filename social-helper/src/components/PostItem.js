import React from 'react';

const PostItem = ({ post }) => {
    return (
        <div style={{ border: '1px solid black', margin: '10px 0', padding: '10px'}}>
            <h2>{post.title}</h2>
            <p>{post.descrizione}</p>
        </div>
    )
}

export default PostItem;