import './App.css';
import './components/AllBtnStyle.css';
import { ConterctUs } from "./components/ContectUs"
import { Download } from "./components/Daunlod"
import { Help } from "./components/Help"
import { Home } from "./components/Home"
import { JoinUs } from "./components/JoinUs"
import { LogIn } from "./components/LogIn"
import { Search } from "./components/Search"
import { Settings } from "./components/Settings"
function App() {
  return (
    <div
    className="myContainer">
      <div
        className="main">
        
        {/* MATHOD ONE */}

        <ConterctUs/>
        <Download />
        <Help />
        <Home />
        <JoinUs />
        <LogIn />
        <Search />
        <Settings />


        {/* MATHOD TWO */}


        {/* <ConterctUs name="CONTECT US" />
        <Download />
        <Help />
        <Home />
        <JoinUs />
        <LogIn />
        <Search />
        <Settings /> */}

      </div>
    </div>
  );
}

export default App;
