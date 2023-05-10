import {Component} from "react";
import "./Post.css";
import axios from "axios";

class Post extends Component {

  state = {
    posts: [],
  }

  componentDidMount() {
    axios("https://jsonplaceholder.typicode.com/posts")
      // .then(res=>console.log(res));
      .then(res => this.setState({posts: res.data}));

  }

  render() {
    const postsMap = this.state.posts.map((post) => {
      return <p key={post.id}>{post.title}</p>
    })
    return (
      <div>
        {postsMap}
      </div>
    );
  }
}

export default Post;