import {Component} from "react";
import "./ListSimple.css";

class ListSimple extends Component {
  arrayOfMenu = ["Привет, мир", "Знакомство с JSX", "Рендеринг элементов", "Компоненты и пропсы", "Состояние и жизненный цикл", "Обработка событий", "Условный рендеринг", "Списки и ключи", "Формы", "Подъём состояния", "Композиция против наследования", "Философия React"];
  // arrayOfMenu =[5, 5, 5, 7, 9];

  state ={
    text: "",
  }
  // listItem = () =>{
  //   this.arrayOfMenu.map((text, index) => {
  //     <li key={index}>{{text}}</li>
  //   });
  // }

  componentDidMount() {
    const text =  this.arrayOfMenu.map((text, index) => {
      <li key={index}>{{text}}</li>
    });

    this.setState({
      text: text,
    })

    // this.listItem = this.arrayOfMenu.map((text, index) => {
    //   <li key={index}>{this.state.text}</li>
    // });
  }


  render() {
    return (
      <ul>
        {this.state.text}
      </ul>

    );
  }
}

export default ListSimple;