import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import axios from "axios";
import styles from "./pagesStyle.module.scss"
import {Link} from "react-router-dom";

const SingleBlogPage = () => {

  const [post, setPost] = useState(null);
  const {id} = useParams();
  const navigate = useNavigate();

  const goBack = ()=> navigate(-1);
  // const goBack = ()=> navigate("/posts", {state: 75});
  // const goHome = ()=> navigate("/", {replace: true});


  useEffect(()=>{
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response=>setPost(response.data));
  }, [id]);

  return (
    <div className={styles.singleBlog}>
      SingleBlogPage {id}
      <p><button onClick={goBack}>Go back</button>
        {/*<button onClick={goHome}>Go Home</button>*/}
        <Link to={"/"}>go Home</Link>
      </p>
      {post && (<><h1>{post.title}</h1><p>{post.body}</p></>)}
      <p className={styles.linkForEdit}> <Link to={`/posts/${id}/edit`}>Edit this post</Link></p>
    </div>
  );
};

export default SingleBlogPage;