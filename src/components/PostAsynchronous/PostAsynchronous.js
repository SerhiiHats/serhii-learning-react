import "./PostAsynchronous.scss";

import React, {Component} from 'react';
import Loader from "../Loader/Loader";
import {LoaderAction} from "./asyncAction";
import {connect} from "react-redux";

class PostAsynchronous extends Component {
  state = {
    posts: [],
    visible: true,
  }


  componentDidMount() {
    // axios("https://jsonplaceholder.typicode.com/posts")
    //   .then(response => this.setState({posts: response.data}));
    this.props.dispatch(LoaderAction());
  }

  render() {
    const {postsFR} = this.props;

    const postsMap = postsFR.postItems.map((post) => {
      return <p key={post.id}>{post.id} : {post.title}</p>
    })
    return (
      <div className={"component-post"}>
        <button className={"btnForView"} onClick={() => this.setState({visible: !this.state.visible})}>
          Показать/скрыть
        </button>
        {this.state.visible &&
          <div>
            {postsFR.loading ?
            <div className={"viewLoader"}><Loader/></div> :
            <div className={"viewPosts"}>{postsMap}</div>}
          </div>}

      </div>
    );
  }

}

const mapStoreToProps = (store)=> {
  return{
    postsFR: store.postsFR
  }
}

export default connect(mapStoreToProps)(PostAsynchronous);