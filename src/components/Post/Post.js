import {Component} from "react";
import "./Post.scss";
import axios from "axios";
import Loader from "../Loader/Loader";

class Post extends Component {

  state = {
    posts: [],
    visible: false,
  }


  componentDidMount() {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then(response => this.setState({posts: response.data}));
  }

  render() {

    const postsMap = this.state.posts.map((post) => {
      return <p key={post.id}>{post.id} : {post.title}</p>
    })
    return (
      <div  className={"component-post"}>
        <div className={"viewLoader"}>{!this.state.posts.length && <Loader/>}</div>
        <button className={"btnForView"} onClick={() => this.setState({visible: !this.state.visible})}>Показать/скрыть
        </button>
        {this.state.visible && postsMap}
      </div>
    );
  }


}

export default Post;