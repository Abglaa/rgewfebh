import axios from "axios"; 
import { useState, useEffect } from 'react';

const PostPage = (  ) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts?limit=3');
        setPosts(response.data.posts);
        console.log(response.data);
        
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Список постов</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostPage;
