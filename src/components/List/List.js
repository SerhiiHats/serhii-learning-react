import {Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import "./List.css"

class List extends Component {
  state = {
    inputValue: "",
  }

  // render() {
  //   const {arr,name, addHandler, ...props} = this.props;
  //   // const arr = this.props.arr;
  //
  //   console.log(arr)
  //
  //   const list = arr.map((e,i)=>{
  //     return <p key={uuidv4()}>{i} - {e}</p>
  //   })
  //
  //   return (
  //     <div>
  //
  //       {name}
  //       {list}
  //
  //       <button onClick={()=>{addHandler("Добавленное поле")}}> ADD 1 </button>
  //
  //     </div>
  //   );
  // }

  // addItem(text){
  //   return(
  //     <p>text</p>
  //   )
  // }

  render() {
    return (
      <div>
        <p>List</p>
        {/*{this.addItem()}*/}
        <form>
          {/*<input/>*/}
          {/*<input type="text" value={5}/>*/}
          {/*<button onClick={()=>addItem(this.state.inputValue)}> ADD To Do</button>*/}

          <input type="text" value={this.state.inputValue} onChange={
            (e) => {
              this.setState({inputValue: e.target.value})
            }
          }/>
          <button> ADD To Do</button>
        </form>
      </div>
    );
  }
}

export default List;