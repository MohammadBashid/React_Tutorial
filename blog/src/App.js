import React from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import ClassComp from './ClassComp';
import Functional from './Functional';
import Props from './Props';
function App() {
  return (
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* wE CAN CALL LIKE THIS ALSO PROPS 
          <h1>Props in React</h1> */}
         <Home /> 
        <ClassComp />
        <Functional text="Function Profile component" />
        {/* TO ADD DATA 
        <Props text="Hello Props" /> */}
        
        {/* TO ADD NAME <Props text={{name:'peter'}}  data="Profile Data"/>
      </header>  */}
        
        {/* TO ADD MORE DATA <Props text={{name:'peter'}}  data="Props Data" />
      </header> */}

       <Props text={{name:'peter'}}  data="Props Data"/>
      </header> 

      {/* AT A TIME WE WE USE TWO <Props text={{name:'peter'}}  data="peter Data"/>
      <Props text={{name:'bruce'}}  data="Bruce Data"/>
      </header> */}

      {/* "JSX code can be run like HTML. To run the code first, we need to stop the header code." {
      React.createElement(
        'h1',
        {className:'head-tag'},
        'Hello JSX'
      )
      } */}
    </div>
  );
}

export default App;
