import React, {useEffect, useState} from 'react';
import style from "./pagesStyle.module.scss";
import axios from "axios";
import {Link} from "react-router-dom";

const BlogPage = () => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/posts")
      .then(response=>setPosts(response.data));
  }, []);

  return (
    <div className={style.blog}>
      <h1>Blog </h1>
      <p>This is a demo website page Blog with React-router-dom library</p>
      {posts.map((post)=>{
        return(<Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>)
        }
      )}
    </div>
  );
};

export default BlogPage;