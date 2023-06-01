import React from 'react';
import styles from "./pagesStyle.module.scss";
import useAuth from "../hooks/useAuth";
import {useNavigate} from "react-router";

const CreatePostPage = () => {
  const {signOut} = useAuth();
  const navigate = useNavigate();

  return (
    <div className={styles.createBlog}>
      <h1>Create a Post</h1>
      <button style={{width: 70, height: 30, margin: 20}}
              onClick={()=>signOut(() => navigate("/", {replace: true}))}>Logout
      </button>
    </div>
  );
};


export default CreatePostPage;