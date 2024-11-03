import logo from './logo.svg';
import './App.css';
import FunctionalComponent from "./component/functional";
import ClassComponent from "./component/class";
import StyledText from "./component/hocimpl";
import JsxExample from "./component/JsxExample";
function App() {
    const deb = true;
    if(deb=== true) return <JsxExample subject={"ReactJs"}/>
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
          Learn React
        </a>
      </header>
      <FunctionalComponent />
      <ClassComponent/>
        <StyledText/>
    </div>
  );
}

export default App;
