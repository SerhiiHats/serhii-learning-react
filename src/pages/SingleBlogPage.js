import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import styles from "./pagesStyle.module.scss"
import {Link} from "react-router-dom";

const SingleBlogPage = () => {

  const [post, setPost] = useState(null);
  const {id} = useParams();

  useEffect(()=>{
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response=>setPost(response.data));
  }, [id]);

  return (
    <div className={styles.singleBlog}>
      SingleBlogPage {id}
      {post && (<><h1>{post.title}</h1><p>{post.body}</p></>)}
      <p className={styles.linkForEdit}> <Link to={`/posts/${id}/edit`}>Edit this post</Link></p>
    </div>
  );
};

export default SingleBlogPage;