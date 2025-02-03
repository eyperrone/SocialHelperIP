import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../mock/mockApi';
import PostItem from './PostItem';
import AddPost from './AddPost'


const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  const handleAddPost = (newPost) => {
    setPosts( (prevPost) => [
        ...prevPost,
        { id: prevPost.length + 1, ...newPost}
    ]) 
  };


  if (loading) return <p>Caricamento in corso...</p>;

  return (
    <div>
      <h1>Lista dei Post</h1>
      <AddPost onAddPost={handleAddPost} />
      {posts.map((post) => (
       <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;