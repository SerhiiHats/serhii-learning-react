import { Component } from "react";
import "./Title.css"
import {connect} from "react-redux";
import store from "../../redux/configStore";
import {changeTitle} from "./action";

class Title extends Component {


   render()   {
      const {title, titleFromStore, dispatch} = this.props;
      return (
         <div>
            <h1>{this.props.title || "Hello"}</h1>
            <h1>{this.props.titleFromStore || "Hello from store"}</h1>
            <button onClick={()=>{dispatch(changeTitle("Title change Store"))}}>Click from title</button>
         </div>
      )
   }
}


const mapStateToProps = (store) =>{
   return {
      titleFromStore: store.title,
   }
}

export default connect(mapStateToProps)(Title);