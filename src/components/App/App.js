import logo from '../../logo.svg';
import './App.css';
import WelcomeSimple from '../WelcomeSimple/WelcomeSimple';
import Clock from '../Clock/Clock';
import MyFirstComponent from "../MyFirstComponent/MyFirstComponent";
import Counter from "../Counter/Counter"
import CounterSimple from "../CounterSimple/CounterSimple";
import CounterCollback from "../CounterCollback/CounterCollback";
import ConditionalRendering from "../ConditionalRendering/ConditionalRendering";
import ConditionalRenderingTernary from "../ConditionalRenderingTernary/ConditionalRenderingTernary";
import { Component } from "react";
import ChangeColorText from "../ChangeColorText/ChangeColorText";
import ListSimple from "../ListSimple/ListSimple";
import List from "../List/List";
import Header from "../Header/Header";
import {changeTitle} from "../Title/action";
import {connect} from "react-redux";

class App extends Component {

  state = {
    visibleProps: true,
    arrayColor: ["red", "yellow", "green"],
    arrayOfMenu: ["Привет, мир", "Знакомство с JSX", "Рендеринг элементов", "Компоненты и пропсы", "Состояние и жизненный цикл", "Обработка событий", "Условный рендеринг", "Списки и ключи", "Формы", "Подъём состояния", "Композиция против наследования", "Философия React"],
    arrayOfRainbaw: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
  }

  handlerVisibleProps() {
    this.setState(
      (state) => ({ visibleProps: !state.visibleProps })
    );
  }

  addHadlerList(item) {
    this.setState({
      arrayOfRainbaw: [...this.state.arrayOfRainbaw, item]
    });

    console.log(this.state)
  }

  render() {

    const {dispatch} = this.props;

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            (new doc.) Learn React
          </a>
          <a
            className="App-link"
            href="https://ru.legacy.reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            (old doc.) Learn React
          </a>
        </header>

        <main>
          <div className="main-container">
            <div className='lesson1'>
              <div className='left-card'>
                <p className={"number-lesson"}>first lesson:</p>
                <p>component: MyFirstComponent</p>
              </div>
              <div className='right-card'>
                <MyFirstComponent color="red" size={16} />
                <MyFirstComponent color="blue" size={18} />
              </div>
            </div>
            <div className='lesson2'>
              <div className='left-card'>
                <p className={"number-lesson"}>secondary lesson:</p>
                <p>component: WelcomeSimple</p>
              </div>
              <div className='right-card'>
                <WelcomeSimple firstName="Serhii" />
                <WelcomeSimple />
              </div>
            </div>
            <div className='lesson2'>
              <div className='left-card'>
                <p>component: Clock</p>
                <p>-color from Array</p>
                <p>-color from Random</p>
              </div>
              <div className='right-card'>
                <Clock />
              </div>
            </div>

            <div className='lesson2'>
              <div className='left-card'>
                <p>component: CounterSimple</p>
              </div>
              <div className='right-card'>
                <CounterSimple text={"Простой счетчик: "} />
              </div>
            </div>

            <div className='lesson2'>
              <div className='left-card'>
                <p>component: CounterCollback</p>
              </div>
              <div className='right-card'>
                <CounterCollback text={"Простой счетчик с collback функц.: "} increment={1} />
              </div>
            </div>

            <div className='lesson2'>
              <div className='left-card'>
                <p>component: Counter</p>
              </div>
              <div className='right-card'>
                <Counter />
              </div>
            </div>

            <div className='lesson2'>
              <div className='left-card'>
                <p>component: ConditionalRendering</p>
                <p>unwatch likes with Parent</p>
              </div>
              <div className='right-card'>
                <ConditionalRendering
                  visibleProps={this.state.visibleProps}
                  handlerVisibleProps={() => this.handlerVisibleProps()}
                />
              </div>
            </div>

            <div className='lesson2'>
              <div className='left-card'>
                <p>component: Conditional Rendering Ternary</p>
              </div>
              <div className='right-card'>
                <ConditionalRenderingTernary />
                <ConditionalRenderingTernary countMessage={2} />
              </div>
            </div>

            <div className='lesson2'>
              <div className='left-card'>
                <p>component: Change Color Text</p>
              </div>
              <div className='right-card'>
                <ChangeColorText text={"Компоненту передали цвет (violet) и массив цветов (grey, orange, indigo, aquamarine"} color={"violet"} arrayColor={["grey", "orange", "indigo", "aquamarine"]} />
                <ChangeColorText text={"Компоненту не передавали цвет но передан массив цветов (red, yellow, green)"} arrayColor={this.state.arrayColor} />
                <ChangeColorText text={"Компоненту передали цвет (tomato) но не передали массив цветов"} color={"tomato"} />
                <ChangeColorText />
              </div>
            </div>

            <div className='lesson3'>
              <div className='left-card'>
                <p className={"number-lesson"}>third lesson:</p>
                <p>component: Simple List</p>
              </div>
              <div className='right-card'>
                <ListSimple listItem={this.state.arrayOfMenu} />
                <ListSimple listItem={this.state.arrayOfRainbaw} />
                <ListSimple listItem={["Компоненты и пропсы", "Состояние и жизненный цикл", "Обработка событий", "Условный рендеринг", "Списки и ключи", "Формы", "Подъём состояния", "Композиция против наследования"]} />
                <ListSimple />
              </div>
            </div>

            <div className='lesson3'>
              <div className='left-card'>
                <p>component: List</p>
                <p>with button add list</p>
              </div>
              <div className='right-card'>
                <List arrayForList={this.state.arrayOfRainbaw} addHandlerList={(elem) => {
                  this.addHadlerList(elem)
                }} />
              </div>
            </div>

            <div className='lesson2'>
              <div className='left-card'>
                <p className={"number-lesson"}>fourth lesson: List</p>
                <p>component:</p>
              </div>
              <div className='right-card'>
              </div>
            </div>
            {this.props.dispatch.log}
            <Header/>
            <button onClick={()=>dispatch(changeTitle("change Store From App"))}>Click from App</button>

          </div>
        </main>
      </div>
    );
  }

}


const map = () =>{

}

export default connect(map)(App);
// export default App;