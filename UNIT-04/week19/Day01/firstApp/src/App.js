// import './App.css';
import { ListItems } from "./components/ListItem"
function App() {
  return (
    <div>
      <ListItems age="1" name={2} obj={{ a: 1 }} />
      <ListItems name="shivam" age={23} />
    </div>
  );
}

export default App;
