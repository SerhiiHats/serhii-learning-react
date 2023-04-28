import {Component} from "react";
import "./MyFirstComponent.css"
class MyFirstComponent extends Component{
    render() {
        return (
            <div>
                <span style={{color:this.props.color, fontSize:this.props.size}}>Hello World!!!</span>
            </div>
        );
    }
}

export default MyFirstComponent;