
import './App.css';
import MainSection from './components/Main-Section/MainSection';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <SideBar/>
        <MainSection/>
        <div className='floatMode'><i class={"fa fa-moon"}></i></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
