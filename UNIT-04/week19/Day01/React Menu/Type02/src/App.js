import './App.css';
import './components/AllBtnStyle.css';
import { AllBtnFiles } from "./components/AllBtnFile"
function App() {
  return (
    <div
      className="myContainer">
      <div
        className="main">

        <AllBtnFiles name="CONTECT US" />
        <AllBtnFiles name="DOWNLOAD" />
        <AllBtnFiles name="HELP" />
        <AllBtnFiles name="HOME" />
        <AllBtnFiles name="JOIN US" />
        <AllBtnFiles name="LOG IN" />
        <AllBtnFiles name="SEARCH" />
        <AllBtnFiles name="SETTINGS" />

      </div>
    </div>
  );
}

export default App;
