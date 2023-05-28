import React from 'react';
import styles from "./pagesStyle.module.scss"
import {useParams} from "react-router";

const EditPostPage = () => {

  const {id} = useParams();

  return (
    <div className={styles.editBlog}>
      <h1>Edit Post {id}</h1>
    </div>
  );
};

export default EditPostPage;