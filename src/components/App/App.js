import logo from '../../logo.svg';
import './App.scss';
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
import ListSimple from "../ListSimple/ListSimple";
import List from "../List/List";
import Header from "../Header/Header";
import {changeTitle} from "../Title/action";
import {connect} from "react-redux";
import NameForm from "../NameForm/NameForm";
import NotControlForm from "../NotControlForm/NotControlForm";
import NameTextArea from "../NameTextArea/NameTextArea";
import NameSelect from "../NameSelect/NameSelect";
import FormFeedback from "../FormFeedback/FormFeedback";
import ListRedux from "../ListRedux/ListRedux";
import ToDoAnsynchron from "../ToDoAnsynchron/ToDoAnsynchron";
import FuncComp from "../FuncComp/FuncComp";
import Post from "../Post/Post";
import ToDoFromState from "../ToDoFromState/ToDoFromState";
import CounterRedux from "../CounterRedux/CounterRedux";
import PostAsynchronous from "../PostAsynchronous/PostAsynchronous";
import {iconTypes} from "../../constants/icons";
import {Icon} from "../Icon/Icon";
import FuncCompCountRedux from "../FuncCompCountRedux/FuncCompCountRedux";
import {Button} from "../Button/Button";
import MainBoardToDoFunction from "../MainBoardToDoFunction/MainBoardToDoFunction";
import {NavLink} from "react-router-dom";
import {IconCast} from "../IconCast/IconCast";
import InputWithCustomHook from "../InputWithCustomHook/InputWithCustomHook";
import titleReducer from "../Title/titleReducer";


class App extends Component {

  state = {
    visibleProps: true,
    arrayColor: ["red", "yellow", "green"],
    arrayOfMenu: ["Привет, мир", "Знакомство с JSX", "Рендеринг элементов", "Компоненты и пропсы", "Состояние и жизненный цикл", "Обработка событий", "Условный рендеринг", "Списки и ключи", "Формы", "Подъём состояния", "Композиция против наследования", "Философия React"],
    arrayOfRainbaw: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
    requestForm: false,
  }

  handlerVisibleProps() {
    this.setState(
      (state) => ({visibleProps: !state.visibleProps})
    );
  }

  addHadlerList(item) {
    this.setState({
      arrayOfRainbaw: [...this.state.arrayOfRainbaw, item]
    });
  }

  handlerForm(obj) {
    this.setState({requestForm: obj})
  }

  render() {

    const {dispatch} = this.props;

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
            <div className='lesson'>
              <div className='left-card'>
                <p className={"number-lesson"}>first lesson:</p>
                <p>component: MyFirstComponent</p>
              </div>
              <div className='right-card'>
                <MyFirstComponent color="red" size={16}/>
                <MyFirstComponent color="blue" size={18}/>
              </div>
            </div>
            <div className='lesson'>
              <div className='left-card'>
                <p className={"number-lesson"}>secondary lesson:</p>
                <p>component: WelcomeSimple</p>
              </div>
              <div className='right-card'>
                <WelcomeSimple firstName="Serhii"/>
                <WelcomeSimple/>
              </div>
            </div>
            <div className='lesson'>
              <div className='left-card'>
                <p>component: Clock</p>
                <p>-color from Array</p>
                <p>-color from Random</p>
              </div>
              <div className='right-card'>
                <Clock/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p>component: ListRedux</p>
              </div>
              <div className='right-card'>
                <ListRedux/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p>component: CounterSimple</p>
              </div>
              <div className='right-card'>
                <CounterSimple text={"Простой счетчик: "}/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p>component: CounterCollback</p>
              </div>
              <div className='right-card'>
                <CounterCollback text={"Простой счетчик с collback функц.: "} increment={1}/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p>component: Counter</p>
              </div>
              <div className='right-card'>
                <Counter/>
              </div>
            </div>

            <div className='lesson'>
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

            <div className='lesson'>
              <div className='left-card'>
                <p>component: Conditional Rendering Ternary</p>
              </div>
              <div className='right-card'>
                <ConditionalRenderingTernary/>
                <ConditionalRenderingTernary countMessage={2}/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p>component: Change Color Text</p>
              </div>
              <div className='right-card'>
                <ChangeColorText
                  text={"Компоненту передали цвет (violet) и массив цветов (grey, orange, indigo, aquamarine"}
                  color={"violet"} arrayColor={["grey", "orange", "indigo", "aquamarine"]}/>
                <ChangeColorText text={"Компоненту не передавали цвет но передан массив цветов (red, yellow, green)"}
                                 arrayColor={this.state.arrayColor}/>
                <ChangeColorText text={"Компоненту передали цвет (tomato) но не передали массив цветов"}
                                 color={"tomato"}/>
                <ChangeColorText/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p className={"number-lesson"}>third lesson:</p>
                <p>component: Simple List</p>
              </div>
              <div className='right-card'>
                <ListSimple listItem={this.state.arrayOfMenu}/>
                <ListSimple listItem={this.state.arrayOfRainbaw}/>
                <ListSimple
                  listItem={["Компоненты и пропсы", "Состояние и жизненный цикл", "Обработка событий", "Условный рендеринг", "Списки и ключи", "Формы", "Подъём состояния", "Композиция против наследования"]}/>
                <ListSimple/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p>component: List</p>
                <p>with input, button add list, clean input, press Enter to add</p>
              </div>
              <div className='right-card'>
                <List arrayForList={this.state.arrayOfRainbaw} addHandlerList={(elem) => {
                  this.addHadlerList(elem)
                }}/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p className={"number-lesson"}>fourth lesson:</p>
                <p>component:NameForm Control Forms</p>
              </div>
              <div className='right-card'>
                <NameForm/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p>component: Not control Forms</p>
              </div>
              <div className='right-card'>
                <NotControlForm/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p>component: Control TextArea</p>
              </div>
              <div className='right-card'>
                <NameTextArea/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p>component: Select</p>
              </div>
              <div className='right-card'>
                <NameSelect/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p>component: Form feedback</p>
              </div>
              <div className='right-card'>
                <FormFeedback handlerForm={(obj) => this.handlerForm(obj)} requestForm={this.state.requestForm}/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p className={"number-lesson"}>fourth lesson:</p>
                <p>component: Post from axios and write to inner state without Redux</p>
              </div>
              <div className='right-card'>
                <Post/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p className={"number-lesson"}>homework TODO:</p>
                <p>component: TODO from axios and write to inner State</p>
              </div>
              <div className='right-card'>
                <ToDoFromState/>
              </div>
            </div>


            <div className='lesson'>
              <div className='left-card'>
                <p className={"number-lesson"}>fifth lesson:</p>
                <p>component: ListRedux</p>
              </div>
              <div className='right-card'>
                <ListRedux/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p className={"number-lesson"}>fifth lesson:</p>
                <p>component: Counter Redux</p>
              </div>
              <div className='right-card'>
                <CounterRedux/>

              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p className={"number-lesson"}>fifth lesson:</p>
                <p>component: Header Redux</p>
              </div>
              <div className='right-card'>

                {this.props.dispatch.log}
                <Header/>
                <button onClick={() => dispatch(changeTitle("change Store From App"))}>Click from App</button>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p className={"number-lesson"}>sixth lesson:</p>
                <p>component: Post Asynchronous</p>
              </div>
              <div className='right-card'>
                <PostAsynchronous/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p className={"number-lesson"}>seventh lesson:</p>
                <p>component: TO DO Asynchronous</p>
              </div>
              <div className='right-card'>
                <ToDoAnsynchron/>

              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p className={"number-lesson"}>seventh lesson:</p>
                <p>component: Icon Button with render icon</p>
              </div>
              <div className='right-card seven-lesson'>
                <Icon type={iconTypes.home} size={"30px"} color="#eca9a9" className="holivid"/>
                <Icon type={iconTypes.folder} color="#89badf" size={"30px"} id="22" datamonth="april"/>
                <Icon type={iconTypes.keys} size="30px" color={"#d399e7"}/>
                <Icon type={iconTypes.phone} size={"30px"} color={"#7297d6"}/>
                <Icon type={iconTypes.out} size={"30px"} color={"#eca9a9"}/>
                <Icon type={iconTypes.in} size={"30px"} color={"#d1e3bc"}/>
                <Icon type={iconTypes.facebook} size={"30px"} color={"#030ffc"}/>
                <Icon type={iconTypes.instagram} size="30px" color={"#ba66d7"}/>
                <Icon type={iconTypes.youtube} size={"30px"} color={"#f53434"}/>
                <Icon type={iconTypes.whatsapp} size={"30px"} color={"#97da48"}/>
                <Icon type={iconTypes.telegram} size={"30px"} color={"#4e89ef"}/>
                <Icon type={iconTypes.facebook2} size={"30px"} color={"#1559cc"}/>
                <Button className={'castomClass'} id="id1" iconType={iconTypes.home} size={"30px"}
                        color="blue">first</Button>
                <Button className={'castomClass'} iconType={iconTypes.in} size={"30px"} color="green" id="id">sign
                  in</Button>
                <Button className={'test'} iconType={iconTypes.out} size={"30px"} color="red">sign out</Button>
                <Button className={'castomClass'} color={"green"} iconType={iconTypes.phone}>call me</Button>
                <Button className={'castomClass'} size={"small"} color={"primary"}>second</Button>
                <Button className={'castomClass'} size={"small"} color={"secondary"}>second</Button><br/>
                <NavLink to="/"><Icon type={iconTypes.film} size={"30px"} color={"grey"}/>MovieMagic.UA</NavLink>
                <NavLink to="/"><Icon type={iconTypes.film} size={"30px"} color={"#E30914"}/>MovieMagic.UA</NavLink>
                <br/>
                <NavLink to="/"> <Icon type={iconTypes.home} size={"30px"} color={"grey"}/>Home</NavLink>
                <NavLink to="/"> <Icon type={iconTypes.home} size={"30px"} color={"#E30914"}/>Home</NavLink>
                <NavLink to='/discovery'><Icon type={iconTypes.compass} size={"30px"}
                                               color={"grey"}/>Discovery</NavLink>
                <NavLink to='/discovery'><Icon type={iconTypes.compass} size={"30px"}
                                               color={"#E30914"}/>Discovery</NavLink>
                <NavLink to='/fresh'><Icon type={iconTypes.spinner} size={"30px"} color={"grey"}/>Fresh movies</NavLink>
                <NavLink to='/fresh'><Icon type={iconTypes.spinner} size={"30px"} color={"#E30914"}/>Fresh
                  movies</NavLink>
                <NavLink to='/trending'><Icon type={iconTypes.fire} size={"30px"} color={"grey"}/>Trending now</NavLink>
                <NavLink to='/trending'><Icon type={iconTypes.fire} size={"30px"} color={"#E30914"}/>Trending
                  now</NavLink>
                <br/>
                <NavLink to='/comedy'><Icon type={iconTypes.happy2} size={"30px"} color={"grey"}/>Comedy</NavLink>
                <NavLink to='/comedy'><Icon type={iconTypes.happy2} size={"30px"} color={"#E30914"}/>Comedy</NavLink>
                <NavLink to='/cartoons'><Icon type={iconTypes.manWomen} size={"30px"} color={"grey"}/>Cartoons</NavLink>
                <NavLink to='/cartoons'><Icon type={iconTypes.manWomen} size={"30px"}
                                              color={"#E30914"}/>Cartoons</NavLink>
                <NavLink to='/fantasy'><Icon type={iconTypes.magicWand} size={"30px"} color={"grey"}/>Fantasy</NavLink>
                <NavLink to='/fantasy'><Icon type={iconTypes.magicWand} size={"30px"}
                                             color={"#E30914"}/>Fantasy</NavLink>
                <NavLink to='/biography'><Icon type={iconTypes.hipster2} size={"30px"}
                                               color={"grey"}/>Biography</NavLink>
                <NavLink to='/biography'><Icon type={iconTypes.hipster2} size={"30px"}
                                               color={"#E30914"}/>Biography</NavLink>
                <br/>
                <NavLink to='/auth'><Icon type={iconTypes.enter} size={"30px"} color={"grey"}/>Login</NavLink>
                <NavLink to='/auth'><Icon type={iconTypes.enter} size={"30px"} color={"#E30914"}/>Login</NavLink>
                <NavLink to='/'><Icon type={iconTypes.exit} size={"30px"} color={"grey"}/>Logout</NavLink>
                <NavLink to='/'><Icon type={iconTypes.exit} size={"30px"} color={"#E30914"}/>Logout</NavLink>
                <IconCast type={iconTypes.home}/>
              </div>
            </div>


            <div className='lesson'>
              <div className='left-card'>
                <p className={"number-lesson"}>seventh lesson:</p>
                <p>component: ListComposition</p>
              </div>
              <div className='right-card'>
                <MainBoardToDoFunction/>

              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p className={"number-lesson"}>eight lesson:</p>
                <p>component: simple FuncComp</p>
              </div>
              <div className='right-card'>
                <FuncComp name={"Sergey!!!!"}/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p className={"number-lesson"}>eight lesson:</p>
                <p>component: funcComp counter from Redux</p>
              </div>
              <div className='right-card'>
                something
                <FuncCompCountRedux/>
              </div>
            </div>

            <div className='lesson'>
              <div className='left-card'>
                <p className={"number-lesson"}>nine lesson:</p>
                <p>component: InputWithCustomHook (Input with custom hooks)</p>
              </div>
              <div className='right-card'>
                Input custom hooks
                <InputWithCustomHook/>
              </div>
            </div>

          </div>
        </main>
      </div>
    );
  }

}


const map = (store) => {
return {
  title: store.title,
}
}

export default connect(map)(App);
// export default App;