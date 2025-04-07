import { useState, useEffect } from 'react';
import { getPosts } from '../services/api';
import './App.css';

function App() {
 
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchData();
  }, []);
  

  return (
    <div className="App">
       <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
