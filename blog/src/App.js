import logo from './logo.svg';
import './App.css';
import ClassComp from './ClassComp';
import Functional from './Functional';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClassComp />
        <Functional text="Function Profile component" />
      </header>
    </div>
  );
}

export default App;
