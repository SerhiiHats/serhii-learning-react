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
import {Component} from "react";
import ChangeColorText from "../ChangeColorText/ChangeColorText";

class App extends Component {

  state ={
    visibleProps: true,
  }

  handlerVisibleProps(){
    this.setState(
      (state)=>({visibleProps: !state.visibleProps})
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
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
                <MyFirstComponent color="red" size={16}/>
                <MyFirstComponent color="blue" size={18}/>
              </div>
            </div>
            <div className='lesson2'>
              <div className='left-card'>
                <p className={"number-lesson"}>secondary lesson:</p>
                <p>component: WelcomeSimple</p>
              </div>
              <div className='right-card'>
                <WelcomeSimple firstName="Serhii"/>
                <WelcomeSimple/>
              </div>
            </div>
            <div className='lesson2'>
              <div className='left-card'>
                <p>component: Clock</p>
                <p>-color from Array</p>
                <p>-color from Random</p>
              </div>
              <div className='right-card'>
                <Clock/>
              </div>
            </div>

            <div className='lesson2'>
              <div className='left-card'>
                <p>component: CounterSimple</p>
              </div>
              <div className='right-card'>
                <CounterSimple text={"Простой счетчик: "}/>
              </div>
            </div>

            <div className='lesson2'>
              <div className='left-card'>
                <p>component: CounterCollback</p>
              </div>
              <div className='right-card'>
                <CounterCollback text={"Простой счетчик с collback функц.: "} increment={1}/>
              </div>
            </div>

            <div className='lesson2'>
              <div className='left-card'>
                <p>component: Counter</p>
              </div>
              <div className='right-card'>
                <Counter/>
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
                  handlerVisibleProps={()=>this.handlerVisibleProps()}
                />
              </div>
            </div>

            <div className='lesson2'>
              <div className='left-card'>
                <p>component: Conditional Rendering Ternary</p>
              </div>
              <div className='right-card'>
                <ConditionalRenderingTernary/>
                <ConditionalRenderingTernary countMessage={2}/>
              </div>
            </div>

            <div className='lesson2'>
              <div className='left-card'>
                <p>component: Change Color Text</p>
              </div>
              <div className='right-card'>
               <ChangeColorText/>
              </div>
            </div>

            <div className='lesson2'>
              <div className='left-card'>
                <p className={"number-lesson"}>third lesson:</p>
                <p>component: </p>
              </div>
              <div className='right-card'>

              </div>
            </div>

            <div className='lesson2'>
              <div className='left-card'>
                <p className={"number-lesson"}>fourth lesson:</p>
                <p>component: </p>
              </div>
              <div className='right-card'>

              </div>
            </div>


          </div>
        </main>
      </div>
    );
  }

  }



export default App;
