import logo from './logo.svg';
import './App.css';
import StateComponent from './components/State';
import Props from './components/Props';
import ComponentOne from './components/Home';
import Hoops from './components/Hooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home1 from './components/Home1';
import About from './components/About';
import Login from './components/Login';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Templates from './components/Templates';





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home1}></Route>
        <Route path='/About' Component={About}></Route>
        <Route path='/Contact' Component={Contact}></Route>
        <Route path='/Signup' Component={Signup}></Route>
        <Route path='/Login' Component={Login}></Route>
        <Route path='/Templates' Component={Templates}></Route>
      </Routes>

    </div>

  );
}

export default App;
